import React from 'react';

export interface PerimeterWarningBorderProps {
  className?: string;
  borderRadius?: number;
  strokeWidth?: number;
}

export const PerimeterWarningBorder: React.FC<PerimeterWarningBorderProps> = ({
  className = 'text-rose-500/85 dark:text-rose-400/90',
  borderRadius = 24,
  strokeWidth = 2.25,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`.trim()}
      style={{ borderRadius }}
    >
      <svg
        className="w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={`calc(100% - ${strokeWidth}px)`}
          height={`calc(100% - ${strokeWidth}px)`}
          rx={borderRadius}
          ry={borderRadius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray="6 6"
          strokeLinecap="round"
          className="animate-perimeter-spin"
        />
      </svg>
    </div>
  );
};
