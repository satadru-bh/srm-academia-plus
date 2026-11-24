import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ScrollResistanceProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'y' | 'x' | 'both';
  maxDisplacement?: number;
  disabled?: boolean;
}

// Smooth, critically-damped hydraulic cushion that eliminates jitter and floppy rubber-band oscillation
const SPRING_CONFIG = {
  stiffness: 350,
  damping: 36,
  mass: 0.6,
};

/**
 * Hook to provide tactile spring resistance when dragging or scrolling against boundaries.
 * Uses continuous frame-by-frame exponential decay to eliminate discrete mouse wheel jitter.
 */
export function useScrollResistance(options: {
  targetRef?: React.RefObject<HTMLElement | null>;
  isWindow?: boolean;
  direction?: 'y' | 'x' | 'both';
  maxDisplacement?: number;
  disabled?: boolean;
}) {
  const {
    targetRef,
    isWindow = false,
    direction = 'y',
    maxDisplacement = 8,
    disabled = false,
  } = options;

  const rawY = useMotionValue(0);
  const rawX = useMotionValue(0);

  const springY = useSpring(rawY, SPRING_CONFIG);
  const springX = useSpring(rawX, SPRING_CONFIG);

  const [activeEdge, setActiveEdge] = useState<'top' | 'bottom' | 'left' | 'right' | null>(null);
  const targetY = useRef(0);
  const targetX = useRef(0);
  const rafId = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (disabled) return;

    const getScrollMetrics = () => {
      if (isWindow || !targetRef?.current) {
        const doc = document.documentElement;
        return {
          scrollTop: window.scrollY || doc.scrollTop,
          scrollHeight: doc.scrollHeight,
          clientHeight: window.innerHeight,
          scrollLeft: window.scrollX || doc.scrollLeft,
          scrollWidth: doc.scrollWidth,
          clientWidth: window.innerWidth,
        };
      }

      const el = targetRef.current;
      return {
        scrollTop: el.scrollTop,
        scrollHeight: el.scrollHeight,
        clientHeight: el.clientHeight,
        scrollLeft: el.scrollLeft,
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
      };
    };

    // Smooth continuous RAF decay loop — eliminates all timer fights and discrete jumps
    const startDecayLoop = () => {
      if (rafId.current !== null) return;

      const tick = () => {
        targetY.current *= 0.82;
        targetX.current *= 0.82;

        if (Math.abs(targetY.current) < 0.08) targetY.current = 0;
        if (Math.abs(targetX.current) < 0.08) targetX.current = 0;

        rawY.set(targetY.current);
        rawX.set(targetX.current);

        if (targetY.current === 0 && targetX.current === 0) {
          setActiveEdge(null);
          rafId.current = null;
        } else {
          rafId.current = requestAnimationFrame(tick);
        }
      };

      rafId.current = requestAnimationFrame(tick);
    };

    const stopDecayLoop = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = getScrollMetrics();

      let handled = false;

      // Detect discrete notched mouse wheel clicks on desktop (typically increments of 50-120)
      const isDiscreteWheel = Math.abs(e.deltaY) >= 40 && Number.isInteger(e.deltaY);

      // Vertical Resistance
      if (direction === 'y' || direction === 'both') {
        const isAtTop = scrollTop <= 0.5;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1.5;

        if (isAtTop && e.deltaY < 0) {
          // Pulling down at top edge: smooth hydraulic cushion
          const impulse = isDiscreteWheel
            ? Math.min(2.5, Math.sqrt(Math.abs(e.deltaY)) * 0.25)
            : Math.min(4, Math.abs(e.deltaY) * 0.12);
          targetY.current = Math.min(maxDisplacement, targetY.current + impulse);
          rawY.set(targetY.current);
          setActiveEdge('top');
          handled = true;
        } else if (isAtBottom && e.deltaY > 0) {
          // Pushing up at bottom edge: smooth hydraulic cushion
          const impulse = isDiscreteWheel
            ? Math.min(2.5, Math.sqrt(Math.abs(e.deltaY)) * 0.25)
            : Math.min(4, Math.abs(e.deltaY) * 0.12);
          targetY.current = Math.max(-maxDisplacement, targetY.current - impulse);
          rawY.set(targetY.current);
          setActiveEdge('bottom');
          handled = true;
        } else if ((isAtTop && e.deltaY > 0) || (isAtBottom && e.deltaY < 0)) {
          // Moving away from boundary: zero out instantly
          targetY.current = 0;
          rawY.set(0);
          setActiveEdge(null);
        }
      }

      // Horizontal Resistance
      if (direction === 'x' || direction === 'both') {
        const isAtLeft = scrollLeft <= 0.5;
        const isAtRight = scrollLeft + clientWidth >= scrollWidth - 1.5;
        const isDiscreteWheelX = Math.abs(e.deltaX) >= 40 && Number.isInteger(e.deltaX);

        if (isAtLeft && e.deltaX < 0) {
          const impulse = isDiscreteWheelX
            ? Math.min(2.5, Math.sqrt(Math.abs(e.deltaX)) * 0.25)
            : Math.min(4, Math.abs(e.deltaX) * 0.12);
          targetX.current = Math.min(maxDisplacement, targetX.current + impulse);
          rawX.set(targetX.current);
          setActiveEdge('left');
          handled = true;
        } else if (isAtRight && e.deltaX > 0) {
          const impulse = isDiscreteWheelX
            ? Math.min(2.5, Math.sqrt(Math.abs(e.deltaX)) * 0.25)
            : Math.min(4, Math.abs(e.deltaX) * 0.12);
          targetX.current = Math.max(-maxDisplacement, targetX.current - impulse);
          rawX.set(targetX.current);
          setActiveEdge('right');
          handled = true;
        } else if ((isAtLeft && e.deltaX > 0) || (isAtRight && e.deltaX < 0)) {
          // Moving away from boundary: zero out instantly
          targetX.current = 0;
          rawX.set(0);
          setActiveEdge(null);
        }
      }

      if (handled) {
        startDecayLoop();
      }
    };

    const handleScroll = () => {
      // Whenever normal scroll happens inside content, clear any edge spring immediately
      if (targetY.current !== 0 || targetX.current !== 0 || rawY.get() !== 0 || rawX.get() !== 0) {
        stopDecayLoop();
        targetY.current = 0;
        targetX.current = 0;
        rawY.set(0);
        rawX.set(0);
        setActiveEdge(null);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      stopDecayLoop();
      if (e.touches.length > 0) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current || e.touches.length === 0) return;

      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = getScrollMetrics();
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const dy = currentY - touchStartRef.current.y;
      const dx = currentX - touchStartRef.current.x;

      if (direction === 'y' || direction === 'both') {
        const isAtTop = scrollTop <= 0.5;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1.5;

        if (isAtTop && dy > 0) {
          const tension = Math.min(maxDisplacement, Math.pow(dy, 0.55) * 1.0);
          targetY.current = tension;
          rawY.set(tension);
          setActiveEdge('top');
        } else if (isAtBottom && dy < 0) {
          const tension = Math.max(-maxDisplacement, -Math.pow(Math.abs(dy), 0.55) * 1.0);
          targetY.current = tension;
          rawY.set(tension);
          setActiveEdge('bottom');
        } else {
          targetY.current = 0;
          rawY.set(0);
          setActiveEdge(null);
        }
      }

      if (direction === 'x' || direction === 'both') {
        const isAtLeft = scrollLeft <= 0.5;
        const isAtRight = scrollLeft + clientWidth >= scrollWidth - 1.5;

        if (isAtLeft && dx > 0) {
          const tension = Math.min(maxDisplacement, Math.pow(dx, 0.55) * 1.0);
          targetX.current = tension;
          rawX.set(tension);
          setActiveEdge('left');
        } else if (isAtRight && dx < 0) {
          const tension = Math.max(-maxDisplacement, -Math.pow(Math.abs(dx), 0.55) * 1.0);
          targetX.current = tension;
          rawX.set(tension);
          setActiveEdge('right');
        } else {
          targetX.current = 0;
          rawX.set(0);
          setActiveEdge(null);
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartRef.current = null;
      startDecayLoop();
    };

    const element = isWindow ? window : targetRef?.current;
    if (!element) return;

    element.addEventListener('wheel', handleWheel as any, { passive: true });
    element.addEventListener('scroll', handleScroll as any, { passive: true });
    element.addEventListener('touchstart', handleTouchStart as any, { passive: true });
    element.addEventListener('touchmove', handleTouchMove as any, { passive: true });
    element.addEventListener('touchend', handleTouchEnd as any, { passive: true });
    element.addEventListener('touchcancel', handleTouchEnd as any, { passive: true });

    return () => {
      element.removeEventListener('wheel', handleWheel as any);
      element.removeEventListener('scroll', handleScroll as any);
      element.removeEventListener('touchstart', handleTouchStart as any);
      element.removeEventListener('touchmove', handleTouchMove as any);
      element.removeEventListener('touchend', handleTouchEnd as any);
      element.removeEventListener('touchcancel', handleTouchEnd as any);
      stopDecayLoop();
    };
  }, [targetRef, isWindow, direction, maxDisplacement, disabled, rawY, rawX]);

  return { springY, springX, activeEdge };
}

/**
 * Tactile boundary spring wrapper that simulates physical rubber-band resistance
 * when reaching the end of scrollable areas.
 */
export const ScrollResistanceBoundary: React.FC<ScrollResistanceProps> = ({
  children,
  className = '',
  direction = 'y',
  maxDisplacement = 8,
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { springY, springX, activeEdge } = useScrollResistance({
    targetRef: containerRef,
    isWindow: false,
    direction,
    maxDisplacement,
    disabled,
  });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Resistance Aura Indicators at Limits */}
      {activeEdge === 'top' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'bottom' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'left' && (
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-r from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'right' && (
        <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-l from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
      )}

      {/* Spring-damped Content */}
      <motion.div
        style={{
          y: direction === 'x' ? 0 : springY,
          x: direction === 'y' ? 0 : springX,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * Window-level scroll resistance wrapper for the main page view.
 */
export const WindowScrollResistance: React.FC<{
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}> = ({ children, className = '', disabled = false }) => {
  const { springY, activeEdge } = useScrollResistance({
    isWindow: true,
    direction: 'y',
    maxDisplacement: 8,
    disabled,
  });

  return (
    <div className={`relative ${className}`}>
      {/* Resistance Edge Feedback at Top/Bottom of Viewport */}
      {activeEdge === 'top' && (
        <div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-b from-black/10 dark:from-white/15 to-transparent pointer-events-none z-50 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'bottom' && (
        <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-gradient-to-t from-black/10 dark:from-white/15 to-transparent pointer-events-none z-50 transition-opacity duration-150 animate-pulse" />
      )}

      <motion.div style={{ y: springY }} className="w-full">
        {children}
      </motion.div>
    </div>
  );
};
