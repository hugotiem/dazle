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

  const images = useStaticQuery<any>(graphql`
    query {
      images: allFile(
        filter: {
          relativePath: {
            in: [
              "3d-render-of-shiny-and-wavy-plastic-abstract-shape-3.png"
              "3d-render-of-wide-abstract-light-blue-translucent-shape.png"
            ]
          }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const translate = useTransform(scrollYProgress, [0, 1], [500, 0]);

  const [image1, image2] = images.images.edges.map((e: any) => getImage(e.node));

  return (
    <section
      {...props}
      className={cn('relative mx-auto', className)}
    >
      <ImageScrollAnimation
        className="absolute left-20"
        transform={[200, 0]}
        image={image1}
      />
      <motion.div
        className="max-w-[700px] mx-auto p-7 border backdrop-blur-sm rounded-xl"
        style={{ translateY: translate }}
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
      </motion.div>
      <ImageScrollAnimation
        className="absolute mx-auto w-[100%] right-[-200px] rotate-[-20deg] min-w-[700px]"
        transform={[100, 0]}
        image={image2}
      />
    </section>
  );
};
