import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

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
  enableTilt = true,
  style,
  id,
  layout,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const finePointerQuery = window.matchMedia('(pointer: fine)');
      setCanTilt(finePointerQuery.matches && enableTilt && !shouldReduceMotion);

      const handler = (e: MediaQueryListEvent) => {
        setCanTilt(e.matches && enableTilt && !shouldReduceMotion);
      };
      finePointerQuery.addEventListener?.('change', handler);
      return () => finePointerQuery.removeEventListener?.('change', handler);
    }
  }, [enableTilt, shouldReduceMotion]);

  const rotateX = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 25 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    cardRef.current.style.setProperty('--mouse-x', `${(x * 100).toFixed(2)}%`);
    cardRef.current.style.setProperty('--mouse-y', `${(y * 100).toFixed(2)}%`);

    if (canTilt) {
      const targetRotateX = (0.5 - y) * 2 * 4;
      const targetRotateY = (x - 0.5) * 2 * 4;
      rotateX.set(targetRotateX);
      rotateY.set(targetRotateY);
    }
  };

  const handlePointerLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--mouse-x', '50%');
    cardRef.current.style.setProperty('--mouse-y', '50%');
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      layout={layout}
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX: canTilt ? rotateX : 0,
        rotateY: canTilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        ...style,
      }}
      className={`bento-card card-spotlight perspective-1000 ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
};
