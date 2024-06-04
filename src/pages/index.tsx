import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { HeroHighlight } from '../components/ui/hero-highlight';
import { Navbar } from '../components/Navbar';
import { motion, useScroll } from 'framer-motion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ImageScrollAnimation } from '../components/ui/image-scroll-animation';
import { ProductSection } from '../components/ProductSection';
import StickyScrollSection from '../components/FreelanceSection';
import { useRef } from 'react';
import { Footer } from '../components/Footer';
import { FeatureSection } from '../components/FeatureSection';
import FreelanceSection from '../components/FreelanceSection';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import { TestimonialSection } from '../components/TestimonialSection';
import { AuroraBackground } from '../components/ui/aurora-background';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout className="max-w-screen relative">
      <Navbar className="absolute w-screen" />

      <div className="overflow-y-visible overflow-x-clip">
        <BackgroundGradientAnimation>
          <div className="absolute h-screen z-50 pointer-events-none">
            <div className="relative w-screen">
              <ImageScrollAnimation
                image="orange-glossy-inflatable-cube.png"
                transform={[0, -500]}
                className="absolute w-full w-[70vw] top-[10vh] right-[-30vw]"
              />
              <div className="relative flex flex-col justify-center h-screen z-100">
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
                  className="text-2xl px-4 md:text-4xl lg:text-6xl font-light text-neutral-900 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                  Découvrez{' '}
                  <span className=" bg-gradient-to-tr from-blue-400 via-pink-400 to-white text-transparent bg-clip-text">
                    DAZLE
                  </span>
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
                  className="px-4 text-[7vw] 2xl:text-[90pt] font-light text-neutral-900 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto z-100"
                >
                  LA NOUVELLE ÈRE DU FREELANCING CREATIF
                </motion.h1>
              </div>

              <ImageScrollAnimation
                image="red-ring-inflatable-shape.png"
                className="absolute z-100 w-full w-[70vw] top-[-20vh] left-[-20vw] w-[40vw]"
              />
            </div>
          </div>
        </BackgroundGradientAnimation>

        <div className="">
          <ProductSection />
        </div>
      </div>
      <FeatureSection />
      <div className="bg-neutral-900">
        <FreelanceSection />
      </div>
      <div className="h-screen flex flex-col justify-center">
        <div className="max-w-[900px] mx-20 border p-10">
          <div className="font-medium text-6xl">POURQUOI DAZLE ?</div>
          <div className="text-xl font-light mt-10">
            Dazle redéfinit les standards du freelancing avec ses valeurs
            fondamentales. L'innovation est au cœur de leurs solutions créatives
            et de pointe, permettant de surmonter les défis du freelancing
            moderne. La communauté est également essentielle, offrant un
            environnement solidaire où les membres se soutiennent mutuellement,
            collaborent et grandissent ensemble. L'intégrité est une priorité,
            avec une transparence et une éthique inébranlables dans toutes leurs
            interactions. L'inclusivité est mise en avant, avec une plateforme
            ouverte et accueillante pour tous, peu importe l'origine,
            l'expérience ou les compétences. L'apprentissage continu est
            encouragé, avec des ressources et des opportunités constantes pour
            améliorer les compétences et le savoir-faire. Enfin, l'excellence
            est recherchée, avec une quête incessante d'amélioration pour offrir
            la meilleure expérience utilisateur possible.
          </div>
        </div>
      </div>
      <TestimonialSection />
      <AuroraBackground className='relative'>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Background lights are cool you know.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO title="Home Page">
    <link></link>
  </SEO>
);
