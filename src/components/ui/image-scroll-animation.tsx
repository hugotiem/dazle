import { motion, useScroll, useTransform } from 'framer-motion';
import React, { HTMLAttributes, useRef } from 'react';
import { DynamicImage } from './relative-path-image';
import { cn } from '@/lib/utils';

interface ImageScrollAnimationProps extends HTMLAttributes<HTMLElement> {
  image: string;
  query: any;
  transform?: [from: number, to: number];
}

export const ImageScrollAnimation = ({
  image,
  className,
  transform,
  query,
  ...props
}: ImageScrollAnimationProps) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef
  });

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    transform ?? [100, 0]
  );

  return (
    <div {...props} className={cn(className)}>
      <motion.div
        style={{
          translateY: translate
        }}
      >
        {image ? (
          <DynamicImage query={query} src={image} alt="A descriptive alt text" />
        ) : undefined}
      </motion.div>
    </div>
  );
};
