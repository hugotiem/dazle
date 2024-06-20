import React, { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';
import { ActionButton } from './ActionButton';
import { Logo } from './svg/logo.svg';

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
      <Logo/>
        {/* <div className="flex space-x-10 font-bold text-lg">
          <span className="bg-neutral-900 px-1 rounded">
            <span className="bg-gradient-to-tr from-blue-400 via-pink-400 to-white font-medium text-transparent bg-clip-text">
              DAZLE
            </span>
          </span>
        </div> */}
        <ActionButton className="my-2" />
      </div>
    </nav>
  );
};
