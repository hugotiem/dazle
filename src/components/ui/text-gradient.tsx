import { cn } from '@/lib/utils';
import React, { HTMLAttributes, ReactNode } from 'react';

interface TextGradientProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const TextGradient = ({
  children,
  className,
  ...props
}: TextGradientProps) => {
  return (
    <span {...props} className={cn('', className)}>
      <span className="before:bg-neutral-900 bg-gradient-to-r from-pink-500 via-purple-700 font-medium to-blue-600 text-transparent bg-clip-text">
        {children}
      </span>
    </span>
  );
};
