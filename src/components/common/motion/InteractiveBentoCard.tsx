import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export interface InteractiveBentoCardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  enableTilt?: boolean;
  style?: React.CSSProperties;
  id?: string;
  layout?: boolean | 'position' | 'size' | 'preserve-aspect';
}

export const InteractiveBentoCard: React.FC<InteractiveBentoCardProps> = ({
  children,
  className = '',
  onClick,
  style,
  id,
  layout,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      id={id}
      layout={layout}
      onClick={onClick}
      style={{
        transformPerspective: 1000,
        ...style,
      }}
      className={`bento-card card-spotlight ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
};
