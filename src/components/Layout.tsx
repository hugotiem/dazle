import React, { HTMLAttributes } from 'react';
import { Toaster } from './ui/toaster';
import { cn } from '@/lib/utils';

interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Layout = ({ children, className, ...props }: LayoutProps) => {
  return (
    <>
      <main {...props} className={cn('relative', className)}>
        {children}
      </main>
      <Toaster />
    </>
  );
};
