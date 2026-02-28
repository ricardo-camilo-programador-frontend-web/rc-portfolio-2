import type { FC } from 'react';
import { memo } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  'aria-hidden'?: boolean;
}

export const Code: FC<IconProps> = memo(({ size = 24, className = '', ...props }) => (
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
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
));

Code.displayName = 'Code';
