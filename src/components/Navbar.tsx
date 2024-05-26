import React, { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface NavbarProps extends HTMLAttributes<HTMLElement> {}

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      {...props}
      className={cn(
        'z-[200] relative backdrop-blur-sm bg-opacity-0 p-6 rounded-xl',
        className
      )}
    >
      <div className=" flex justify-between mx-auto font-light">
        <div className="flex space-x-10">
          <span>LGOO</span>
          <ul className="flex space-x-10 ">
            {/* <li>ACCUEIL</li>
            <li>FREELANCE</li>
            <li>ENTREPRISES</li>
            <li>POURQUOI DAZLE ?</li> */}
            {/* <li>Tarification</li> */}
          </ul>
        </div>

        <div className='border px-4 py-2 rounded-full border-black'>JOIN THE WHITELIST</div>
      </div>
    </nav>
  );
};
