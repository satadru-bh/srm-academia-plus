import React from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';

export interface SpringPressProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  scaleHover?: number;
  scaleTap?: number;
}

export const SpringPress: React.FC<SpringPressProps> = ({
  children,
  className = '',
  onClick,
  scaleHover = 1.02,
  scaleTap = 0.97,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={shouldReduceMotion || disabled ? undefined : { scale: scaleHover }}
      whileTap={shouldReduceMotion || disabled ? undefined : { scale: scaleTap }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      className={`inline-flex items-center justify-center focus:outline-none ${className}`.trim()}
      {...props}
    >
      {children}
    </motion.button>
  );
};
