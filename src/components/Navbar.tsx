import React, { HTMLAttributes } from 'react';
import { ActionButton } from './ActionButton';
import { Logo } from './svg/logo.svg';
import { cn } from '@/lib/utils';

interface NavbarProps extends HTMLAttributes<HTMLElement> {}

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      {...props}
      className={cn(
        'z-[200] relative backdrop-blur-sm bg-opacity-0 px-6 rounded-xl',
        className
      )}
    >
      <div className=" flex justify-between items-center mx-auto font-light">
        <Logo />

        <ActionButton outline className="my-2" />
      </div>
    </nav>
  );
};
