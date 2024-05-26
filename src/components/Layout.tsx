import React, { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface LayoutProps extends HTMLAttributes<HTMLElement>{
  children?: React.ReactNode;
}

export const Layout = ({ children, className, ...props }: LayoutProps) => {
  return <main {...props} className={cn("relative", className)}>{children}</main>;
};
