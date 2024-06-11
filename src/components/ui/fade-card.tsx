import React, { HTMLAttributes, useEffect, useRef } from 'react';
import { cn } from '../../utils/cn';
import { cva } from 'class-variance-authority';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView
} from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface FadeCardProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'pink' | 'orange' | 'blue' | 'night';
  title: string;
  description: string;
  delay?: number;
  index?: number;
  hide?: boolean;
}

const FadeCardVariant = cva('p-5', {
  variants: {
    variant: {
      default:
        'bg-custom-gradient from-custom-start to-custom-middle p-4 rounded-lg shadow-lg',
      pink: 'bg-gradient-to-br from-pink-500 via-neutral-900 to-neutral-900 p-4 rounded-lg shadow-lg bg-opacity-50',
      orange:
        'bg-gradient-to-br from-kill-process-start via-kill-process-middle to-kill-process-end p-4 rounded-lg shadow-lg',
      blue: 'bg-gradient-to-br from-blue-900 via-indigo-600 to-purple-700 p-4 rounded-lg shadow-lg',
      night:
        'bg-gradient-to-br from-linear-start via-linear-middle to-linear-end p-4 rounded-lg shadow-lg'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export const FadeCard = ({
  title,
  description,
  variant,
  index,
  delay,
  hide,
  className,
  children,
  ...props
}: FadeCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // const isInView = useInView(ref, { once: false });

  const animation = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     animation.start('visible');
  //   }
  // }, [isInView]);

  console.log(hide)

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {hide ? undefined : (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 25, x: 5 }}
            exit={{
              opacity: 0,
              y: -25,
              x: -5
            }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.1, delay: delay ?? 0 }}
            className="absolute h-auto w-[340px] overflow-hidden backdrop-blur-sm bg-opacity-[.2] bg-white border border-white rounded-2xl z-[100]"
          >
            <div className="text-neutral-900 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-2 ">
                <div className="p-4 px-8 pb-8">
                  <h1 className="font-medium lg:text-xl text-lg">{title}</h1>
                  <p className="lg:text-lg text-sm font-light">{description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        ref={ref}
        className="opacity-0 h-auto w-[340px] overflow-hidden rounded-2xl z-[100]"
      >
        <div className="bg-custom-gradient from-custom-start to-custom-middle rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2 ">
            <div className="p-4 px-8 pb-8">
              <h1 className="text-sm font-bold text-white">{title}</h1>
              <p className="text-sm text-slate-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
