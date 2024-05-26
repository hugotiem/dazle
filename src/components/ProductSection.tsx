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
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef
  });

  const image = useStaticQuery<any>(graphql`
    query {
      image: file(
        relativePath: {
          eq: "3d-render-of-warm-white-abstract-wavy-shape-kinda-glossy-2.png"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
        }
      }
    }
  `);

  const translate = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const imageData = getImage(image.image);

  console.log(imageData)

  return (
    <section {...props} className={cn('relative container mx-auto', className)}>
      <ImageScrollAnimation
        className="absolute top-[-20vh] w-[70%]"
        transform={[200, 0]}
        image={imageData}
      />
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
      {/* <ImageScrollAnimation
        className="absolute mx-auto w-[100%] right-[-200px] rotate-[-20deg] min-w-[700px]"
        transform={[100, 0]}
        image={image2}
      /> */}
    </section>
  );
};
