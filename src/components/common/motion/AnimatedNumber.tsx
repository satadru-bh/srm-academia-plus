import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const spring = useSpring(value, { stiffness: 280, damping: 24 });
  const display = useTransform(spring, (current) => {
    return `${prefix}${Number(current).toFixed(decimals)}${suffix}`;
  });

  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      spring.jump(value);
    } else {
      spring.set(value);
    }
  }, [value, spring, shouldReduceMotion]);

  useEffect(() => {
    return display.on('change', (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = latest;
      }
    });
  }, [display]);

  const formattedInitial = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return (
    <motion.span
      ref={spanRef}
      className={`tabular-nums inline-block ${className}`.trim()}
    >
      {formattedInitial}
    </motion.span>
  );
};
