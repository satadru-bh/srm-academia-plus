import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface SpringPressProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  scaleHover?: number;
  scaleTap?: number;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const SpringPress: React.FC<SpringPressProps> = ({
  children,
  className = '',
  onClick,
  scaleHover = 1.02,
  scaleTap = 0.97,
  type = 'button',
  disabled = false,
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
    >
      {children}
    </motion.button>
  );
};
