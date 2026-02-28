import type { FC } from 'react';
import { memo } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  'aria-hidden'?: boolean;
}

export const ChevronUp: FC<IconProps> = memo(({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
));

ChevronUp.displayName = 'ChevronUp';
