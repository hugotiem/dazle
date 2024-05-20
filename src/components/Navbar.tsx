import React, { HTMLAttributes } from 'react';
import { HeroHighlight } from './ui/hero-highlight';
import { cn } from '../utils/cn';

interface NavbarProps extends HTMLAttributes<HTMLElement> {}

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav {...props} className={cn("backdrop-blur-sm bg-opacity-0 px-5 py-4 m-6 border rounded-xl", className)}>
      <div className=" flex justify-between container mx-auto">
        <ul className="flex space-x-5">
          <li>Accueil</li>
          <li>Freelances</li>
          <li>Entreprises</li>
          <li>Pourquoi Dazle ?</li>
          <li>Tarification</li>
        </ul>
      </div>

      <div></div>
    </nav>
  );
};
