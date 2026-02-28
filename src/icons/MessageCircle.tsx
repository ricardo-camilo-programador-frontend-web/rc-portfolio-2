import type { FC } from 'react';
import { memo } from 'react';

interface IconProps {
  size?: number;
  className?: string;
  'aria-hidden'?: boolean;
}

export const MessageCircle: FC<IconProps> = memo(({ size = 24, className = '', ...props }) => (
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
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
));

MessageCircle.displayName = 'MessageCircle';
