'use client';
import React, { HTMLAttributes } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { cn } from '../../utils/cn';

interface FlipWordsProps extends HTMLAttributes<HTMLElement> {
  word: string;
  index: number;
  duration?: number;
  className?: string;
}

export const FlipWords = ({
  word,
  index,
  duration = 3000,
  className,
  ...props
}: FlipWordsProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 10
        }}
        exit={{
          opacity: 0,
          y: -40,
          position: 'absolute'
        }}
        className={cn(
          'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
          className
        )}
        key={word}
        id={props.id}
      >
        <span
          className="inline-block"
        >
          {word}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};
