import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface AnimatedProgressBarProps {
  value: number;
  max?: number;
  colorClass?: string;
  className?: string;
}

export const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({
  value,
  max = 100,
  colorClass = 'bg-accent',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const maxVal = max > 0 ? max : 100;
  const clampedValue = Math.min(Math.max(value, 0), maxVal);
  const percentage = Math.min(100, Math.max(0, (clampedValue / maxVal) * 100));

  return (
    <div
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={maxVal}
      className={`w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10 ${className}`.trim()}
    >
      <motion.div
        className={`h-full rounded-full ${colorClass}`}
        initial={{ width: `${percentage}%` }}
        animate={{ width: `${percentage}%` }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 180, damping: 25 }
        }
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
