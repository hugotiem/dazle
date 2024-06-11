import React, { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';
import { ActionButton } from './ActionButton';

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
        <div className="flex space-x-10">
          <span>LGOO</span>
        </div>
        <ActionButton className="my-2" />
      </div>
    </nav>
  );
};
