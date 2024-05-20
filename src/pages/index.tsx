import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { HeroHighlight } from '../components/ui/hero-highlight';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ImageScrollAnimation } from '../components/ui/image-scroll-animation';
import { ProductSection } from '../components/ProductSection';
import { FreelanceSection } from '../components/FreelanceSection';

interface IndexProps {
  data: any;
}

const IndexPage: React.FC<PageProps> = ({ data }: IndexProps) => {
  if (!data.images.edges) {
    return <div></div>;
  }

  const [image1, image2, image3] = data.images.edges.map((e: any) =>
    getImage(e.node)
  );

  return (
    <Layout>
      <Navbar />
      <div className="relative">
        <HeroHighlight>
          <div className="container relative">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0]
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              Découvrez DAZLE
            </motion.h1>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0]
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="text-2xl px-4 md:text-4xl lg:text-7xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              La Nouvelle Ère du Freelancing Créatif
            </motion.h1>
          </div>
        </HeroHighlight>
        <div className="max-w-[1200px]">
          <ImageScrollAnimation
            image={image1}
            className="absolute top-[30%] z-100"
          />
          <ImageScrollAnimation
            image={image2}
            transform={[300, 0]}
            className="absolute top-[10%] right-0 z-100"
          />
          <ImageScrollAnimation
            image={image3}
            transform={[0, -100]}
            className="absolute top-[-100px] right-[30%] z-100"
          />
        </div>
      </div>

      <div className="h-screen overflow-hidden">
        <ProductSection />
      </div>
      <div className='h-screen bg-neutral-900'>
        <FreelanceSection/>
      </div>
      <div className='h-screen'></div>
    </Layout>
  );
};

export const query = graphql`
  query {
    images: allFile(
      filter: {
        relativePath: {
          in: [
            "abstract-high-contrast-white-wavy-shape-5.png"
            "3d-render-of-abstract-glossy-blue-liquid-shape.png"
            "3d-abstract-glossy-shape-3.png",
            "3d-render-of-shiny-and-wavy-plastic-abstract-shape-3.png"
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
`;

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO title="Home Page">
    <link></link>
  </SEO>
);
