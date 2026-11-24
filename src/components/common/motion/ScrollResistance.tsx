import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ScrollResistanceProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'y' | 'x' | 'both';
  maxDisplacement?: number;
  disabled?: boolean;
}

const SPRING_CONFIG = {
  stiffness: 420,
  damping: 28,
  mass: 0.5,
};

/**
 * Hook to provide tactile spring resistance when dragging or scrolling against boundaries.
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
    maxDisplacement = 40,
    disabled = false,
  } = options;

  const rawY = useMotionValue(0);
  const rawX = useMotionValue(0);

  const springY = useSpring(rawY, SPRING_CONFIG);
  const springX = useSpring(rawX, SPRING_CONFIG);

  const [activeEdge, setActiveEdge] = useState<'top' | 'bottom' | 'left' | 'right' | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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

    const triggerReset = () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        rawY.set(0);
        rawX.set(0);
        setActiveEdge(null);
      }, 55);
    };

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } = getScrollMetrics();

      let handled = false;

      // Vertical Resistance
      if (direction === 'y' || direction === 'both') {
        const isAtTop = scrollTop <= 0.5;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1.5;

        if (isAtTop && e.deltaY < 0) {
          // Pulling down from top
          const current = rawY.get();
          const tensionDamping = 1 / (1 + Math.abs(current) / 18);
          const next = Math.min(maxDisplacement, current - e.deltaY * 0.22 * tensionDamping);
          rawY.set(next);
          setActiveEdge('top');
          handled = true;
        } else if (isAtBottom && e.deltaY > 0) {
          // Pushing up from bottom
          const current = rawY.get();
          const tensionDamping = 1 / (1 + Math.abs(current) / 18);
          const next = Math.max(-maxDisplacement, current - e.deltaY * 0.22 * tensionDamping);
          rawY.set(next);
          setActiveEdge('bottom');
          handled = true;
        }
      }

      // Horizontal Resistance
      if (direction === 'x' || direction === 'both') {
        const isAtLeft = scrollLeft <= 0.5;
        const isAtRight = scrollLeft + clientWidth >= scrollWidth - 1.5;

        if (isAtLeft && e.deltaX < 0) {
          const current = rawX.get();
          const tensionDamping = 1 / (1 + Math.abs(current) / 18);
          const next = Math.min(maxDisplacement, current - e.deltaX * 0.22 * tensionDamping);
          rawX.set(next);
          setActiveEdge('left');
          handled = true;
        } else if (isAtRight && e.deltaX > 0) {
          const current = rawX.get();
          const tensionDamping = 1 / (1 + Math.abs(current) / 18);
          const next = Math.max(-maxDisplacement, current - e.deltaX * 0.22 * tensionDamping);
          rawX.set(next);
          setActiveEdge('right');
          handled = true;
        }
      }

      if (handled) {
        triggerReset();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
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
          const tension = Math.min(maxDisplacement, Math.pow(dy, 0.75) * 1.6);
          rawY.set(tension);
          setActiveEdge('top');
        } else if (isAtBottom && dy < 0) {
          const tension = Math.max(-maxDisplacement, -Math.pow(Math.abs(dy), 0.75) * 1.6);
          rawY.set(tension);
          setActiveEdge('bottom');
        }
      }

      if (direction === 'x' || direction === 'both') {
        const isAtLeft = scrollLeft <= 0.5;
        const isAtRight = scrollLeft + clientWidth >= scrollWidth - 1.5;

        if (isAtLeft && dx > 0) {
          const tension = Math.min(maxDisplacement, Math.pow(dx, 0.75) * 1.6);
          rawX.set(tension);
          setActiveEdge('left');
        } else if (isAtRight && dx < 0) {
          const tension = Math.max(-maxDisplacement, -Math.pow(Math.abs(dx), 0.75) * 1.6);
          rawX.set(tension);
          setActiveEdge('right');
        }
      }
    };

    const handleTouchEnd = () => {
      touchStartRef.current = null;
      rawY.set(0);
      rawX.set(0);
      setActiveEdge(null);
    };

    const element = isWindow ? window : targetRef?.current;
    if (!element) return;

    element.addEventListener('wheel', handleWheel as any, { passive: true });
    element.addEventListener('touchstart', handleTouchStart as any, { passive: true });
    element.addEventListener('touchmove', handleTouchMove as any, { passive: true });
    element.addEventListener('touchend', handleTouchEnd as any, { passive: true });
    element.addEventListener('touchcancel', handleTouchEnd as any, { passive: true });

    return () => {
      element.removeEventListener('wheel', handleWheel as any);
      element.removeEventListener('touchstart', handleTouchStart as any);
      element.removeEventListener('touchmove', handleTouchMove as any);
      element.removeEventListener('touchend', handleTouchEnd as any);
      element.removeEventListener('touchcancel', handleTouchEnd as any);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
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
  maxDisplacement = 38,
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
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-b from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'bottom' && (
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-t from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'left' && (
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-r from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'right' && (
        <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-gradient-to-l from-black/10 dark:from-white/15 to-transparent pointer-events-none z-30 transition-opacity duration-150 animate-pulse" />
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
    maxDisplacement: 36,
    disabled,
  });

  return (
    <div className={`relative ${className}`}>
      {/* Resistance Edge Feedback at Top/Bottom of Viewport */}
      {activeEdge === 'top' && (
        <div className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-b from-black/10 dark:from-white/15 to-transparent pointer-events-none z-50 transition-opacity duration-150 animate-pulse" />
      )}
      {activeEdge === 'bottom' && (
        <div className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/10 dark:from-white/15 to-transparent pointer-events-none z-50 transition-opacity duration-150 animate-pulse" />
      )}

      <motion.div style={{ y: springY }} className="w-full">
        {children}
      </motion.div>
    </div>
  );
};
