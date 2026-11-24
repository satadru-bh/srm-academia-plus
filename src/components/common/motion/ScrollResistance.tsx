import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface ScrollResistanceProps {
  children?: React.ReactNode;
  className?: string;
  direction?: 'y' | 'x' | 'both';
  maxDisplacement?: number;
  disabled?: boolean;
}

// Mobile tactile rubber-band spring config
const MOBILE_SPRING_CONFIG = {
  stiffness: 420,
  damping: 30,
  mass: 0.4,
};

/**
 * Hook to provide tactile spring resistance exclusively on mobile touch devices.
 * Completely disabled on PC to guarantee zero desktop jitter or interference.
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
    maxDisplacement = 20,
    disabled = false,
  } = options;

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const hasTouch = 'ontouchstart' in window || (navigator && navigator.maxTouchPoints > 0);
    const isNarrow = window.innerWidth < 768;
    return Boolean(hasTouch && isNarrow);
  });

  const rawY = useMotionValue(0);
  const rawX = useMotionValue(0);

  const springY = useSpring(rawY, MOBILE_SPRING_CONFIG);
  const springX = useSpring(rawX, MOBILE_SPRING_CONFIG);

  const [activeEdge, setActiveEdge] = useState<'top' | 'bottom' | 'left' | 'right' | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const hasTouch = 'ontouchstart' in window || (navigator && navigator.maxTouchPoints > 0);
      const isNarrow = window.innerWidth < 768;
      setIsMobile(Boolean(hasTouch && isNarrow));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Strictly mobile-only: disable all listeners on PC
    if (disabled || !isMobile) return;

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
          const tension = Math.min(maxDisplacement, Math.pow(dy, 0.65) * 1.3);
          rawY.set(tension);
          setActiveEdge('top');
        } else if (isAtBottom && dy < 0) {
          const tension = Math.max(-maxDisplacement, -Math.pow(Math.abs(dy), 0.65) * 1.3);
          rawY.set(tension);
          setActiveEdge('bottom');
        } else {
          rawY.set(0);
          setActiveEdge(null);
        }
      }

      if (direction === 'x' || direction === 'both') {
        const isAtLeft = scrollLeft <= 0.5;
        const isAtRight = scrollLeft + clientWidth >= scrollWidth - 1.5;

        if (isAtLeft && dx > 0) {
          const tension = Math.min(maxDisplacement, Math.pow(dx, 0.65) * 1.3);
          rawX.set(tension);
          setActiveEdge('left');
        } else if (isAtRight && dx < 0) {
          const tension = Math.max(-maxDisplacement, -Math.pow(Math.abs(dx), 0.65) * 1.3);
          rawX.set(tension);
          setActiveEdge('right');
        } else {
          rawX.set(0);
          setActiveEdge(null);
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

    element.addEventListener('touchstart', handleTouchStart as any, { passive: true });
    element.addEventListener('touchmove', handleTouchMove as any, { passive: true });
    element.addEventListener('touchend', handleTouchEnd as any, { passive: true });
    element.addEventListener('touchcancel', handleTouchEnd as any, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart as any);
      element.removeEventListener('touchmove', handleTouchMove as any);
      element.removeEventListener('touchend', handleTouchEnd as any);
      element.removeEventListener('touchcancel', handleTouchEnd as any);
    };
  }, [targetRef, isWindow, direction, maxDisplacement, disabled, isMobile, rawY, rawX]);

  return { springY, springX, activeEdge, isMobile };
}

/**
 * Mobile-only tactile boundary spring wrapper.
 * On PC, acts as a zero-overhead pass-through container.
 */
export const ScrollResistanceBoundary: React.FC<ScrollResistanceProps> = ({
  children,
  className = '',
  direction = 'y',
  maxDisplacement = 20,
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { springY, springX, activeEdge, isMobile } = useScrollResistance({
    targetRef: containerRef,
    isWindow: false,
    direction,
    maxDisplacement,
    disabled,
  });

  // Zero-overhead passthrough on PC
  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Resistance Aura Indicators at Limits on Mobile */}
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

      {/* Spring-damped Content on Mobile */}
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
 * Window-level mobile scroll resistance wrapper.
 * On PC, acts as a zero-overhead pass-through container.
 */
export const WindowScrollResistance: React.FC<{
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}> = ({ children, className = '', disabled = false }) => {
  const { springY, activeEdge, isMobile } = useScrollResistance({
    isWindow: true,
    direction: 'y',
    maxDisplacement: 20,
    disabled,
  });

  // Zero-overhead passthrough on PC
  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Resistance Edge Feedback at Top/Bottom of Viewport on Mobile */}
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
