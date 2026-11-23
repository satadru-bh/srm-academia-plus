import React from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';

export interface StaggerContainerProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface StaggerItemProps {
  children?: React.ReactNode;
  className?: string;
}

const getContainerVariants = (delay: number = 0, reduceMotion: boolean): Variants => ({
  hidden: { opacity: reduceMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reduceMotion ? 0 : 0.05,
      delayChildren: delay,
    },
  },
});

const getItemVariants = (reduceMotion: boolean): Variants => ({
  hidden: {
    opacity: reduceMotion ? 1 : 0,
    y: reduceMotion ? 0 : 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
});

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const shouldReduceMotion = !!useReducedMotion();
  const variants = getContainerVariants(delay, shouldReduceMotion);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
}) => {
  const shouldReduceMotion = !!useReducedMotion();
  const variants = getItemVariants(shouldReduceMotion);

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};
