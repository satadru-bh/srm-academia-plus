import React, { useState, useEffect } from 'react';

interface KeycapProps {
  children?: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
}

/**
 * Realistic 3D chiclet keyboard keycap component.
 * Renders physical keyboard key styling with subtle top gradient,
 * beveled 3D bottom edge, inset lighting, and crisp monospace typography.
 */
export const Keycap: React.FC<KeycapProps> = ({
  children,
  className = '',
  size = 'sm'
}) => {
  const sizeClasses = {
    xs: 'min-w-[15px] h-4 px-1 text-[8.5px] rounded-[4px] border-b-[1.5px]',
    sm: 'min-w-[18px] h-5 px-1.5 text-[9.5px] rounded-[5px] border-b-[2px]',
    md: 'min-w-[22px] h-6 px-2 text-[11px] rounded-[6px] border-b-[2.5px]'
  }[size];

  return (
    <kbd
      className={`inline-flex items-center justify-center font-mono font-semibold tracking-tight leading-none select-none text-[#27272A] dark:text-[#E4E4E7] bg-gradient-to-b from-[#FFFFFF] to-[#ECECEE] dark:from-[#2A2A2E] dark:to-[#18181B] border border-black/[0.14] dark:border-white/[0.16] border-b-black/[0.30] dark:border-b-black/80 shadow-[0_1px_1px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_1px_1px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] active:translate-y-[1px] active:border-b-[1px] transition-transform ${sizeClasses} ${className}`}
    >
      {children}
    </kbd>
  );
};

/**
 * Hook to detect whether the user is on macOS / iOS
 */
export function useIsMac(): boolean {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || '';
      const platform = (navigator as any).userAgentData?.platform || navigator.platform || '';
      const isApple = /Mac|iPhone|iPod|iPad/i.test(userAgent) || /Mac/i.test(platform);
      setIsMac(isApple);
    }
  }, []);

  return isMac;
}
