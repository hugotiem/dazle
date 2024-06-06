import * as React from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { motion, useScroll } from 'framer-motion';
import { ImageScrollAnimation } from '../components/ui/image-scroll-animation';
import { ProductSection } from '../components/ProductSection';
import { Footer } from '../components/Footer';
import { FeatureSection } from '../components/FeatureSection';
import FreelanceSection from '../components/FreelanceSection';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import { TestimonialSection } from '../components/TestimonialSection';
import { AuroraBackground } from '../components/ui/aurora-background';
import { ArrowDown } from 'lucide-react';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';

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
                  <span className="bg-gradient-to-tr from-blue-400 via-pink-400 to-white text-transparent bg-clip-text">
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
                  className="px-4 text-[5vw] 2xl:text-[90pt] font-light text-neutral-900 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto z-100"
                >
                  LA NOUVELLE ÈRE DU FREELANCING CREATIF
                </motion.h1>
                <div className="flex mx-auto space-x-3 mt-10 pointer-events-auto">
                  <div className="relative inline-flex  group">
                    <motion.div
                      className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-tr from-blue-400 via-pink-400 to-white rounded-full blur-lg group-hover:opacity-80 group-hover:-inset-1 group-hover:duration-200"
                    ></motion.div>
                    <a
                      href="#join-wait-list-form"
                      // title="Get quote now"
                      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      START NOW
                    </a>
                  </div>
                  <button className="bg-transparent border border-black mx-auto dark:bg-white text-xl rounded-full w-fit text-black dark:text-white px-8 py-3">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <ImageScrollAnimation
              image="red-ring-inflatable-shape.png"
              className="absolute z-100 w-full w-[70vw] top-[-20vh] left-[-20vw] w-[40vw]"
            />
          </div>
          <div className="absolute flex flex-col justify-center items-center space-y-3 bottom-10 left-[50%] translate-x-[-50%] font-bold">
            <div>Scroll to explore</div>
            <motion.div
              initial={{ translateY: 10 }}
              animate={{ translateY: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.5
              }}
            >
              <ArrowDown />
            </motion.div>
          </div>
        </BackgroundGradientAnimation>
      </div>
      <FeatureSection />
      <FreelanceSection />

      <TestimonialSection />
      <AuroraBackground className="relative" id='join-wait-list-form'>
        <div className="absolute top-0 w-screen bg-gradient-to-b from-white to-transparent h-[100px]"></div>
        <div className="absolute bottom-0 w-screen bg-gradient-to-t from-white to-transparent h-[100px]"></div>

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut'
          }}
          className="relative flex min-h-screen flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center sm:w-1/2">
            Propulsez votre créativité encore plus loin.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Rejoins la Whitelist maintenant.
          </div>
          <input
            className="p-3 sm:w-1/4 w-full border rounded-xl focus-visible:outline-none"
            type="email"
            name="email"
            placeholder="Entrez votre email"
            id="email"
          />
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            JOIN THE WHITELIST
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
