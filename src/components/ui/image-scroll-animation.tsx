import { motion, useScroll, useTransform } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { HTMLAttributes, useRef } from 'react';
import { cn } from '../../utils/cn';
import { DynamicImage } from './relative-path-image';

interface ImageScrollAnimationProps extends HTMLAttributes<HTMLElement> {
  image: string;
  transform?: [from: number, to: number];
}

export const ImageScrollAnimation = ({
  image,
  className,
  transform,
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
          <DynamicImage src={image} alt="A descriptive alt text" />
        ) : undefined}
      </motion.div>
    </div>
  );
};
