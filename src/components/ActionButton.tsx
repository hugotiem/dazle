import { motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface ActionButtonProps extends HTMLAttributes<HTMLElement> {
  outline?: boolean;
}

export const ActionButton = ({
  outline = false,
  ...props
}: ActionButtonProps) => {
  return (
    <div {...props}>
      <div className="relative inline-flex group event-pointer-auto">
        {!outline && (
          <motion.div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-tr from-blue-400 via-pink-400 to-white rounded-full blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200"></motion.div>
        )}
        <a
          href="#join-wait-list-form"
          // title="Get quote now"
          className={cn(
            'relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-200 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900',
            outline
              ? 'bg-transparent text-gray-900'
              : ' bg-gray-900 text-white'
          )}
          role="button"
        >
          DÉMARRER
        </a>
      </div>
    </div>
  );
};
