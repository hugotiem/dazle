import { motion, useScroll, useTransform } from 'framer-motion';
import React, { HTMLAttributes, useRef } from 'react';
import { cn } from '../utils/cn';
import { graphql, useStaticQuery } from 'gatsby';
import { ImageScrollAnimation } from './ui/image-scroll-animation';
import { getImage } from 'gatsby-plugin-image';

interface ProductSectionProps extends HTMLAttributes<HTMLElement> {}

export const ProductSection = ({
  className,
  ...props
}: ProductSectionProps) => {
  return (
    <section {...props} className={cn('relative container mx-auto', className)}>
      <div
        className="max-w-[700px] mx-auto p-7 border backdrop-blur-sm rounded-xl"
        // style={{ translateY: translate }}
      >
        <h1 className="text-4xl font-bold">
          Propulsez Votre Talent vers de Nouveaux Sommets
        </h1>
        <p className="mt-10">
          <strong>DAZLE</strong> est bien plus qu'une simple plateforme – c'est
          un écosystème vibrant où les freelances créatifs peuvent briller.
          Rejoignez une communauté dynamique qui valorise chaque aspect de votre
          talent et vous ouvre les portes d'opportunités sans fin.
        </p>
      </div>
    </section>
  );
};
