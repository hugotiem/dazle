import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import Accordion from './ui/accordion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { DynamicImage } from './ui/relative-path-image';
import { ImageScrollAnimation } from './ui/image-scroll-animation';
import { AnimatePresence, motion } from 'framer-motion';

interface FeatureSectionProps extends HTMLAttributes<HTMLElement> {}

export const FeatureSection = ({ ...props }: FeatureSectionProps) => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const sections = [
    {
      textColor: '',
      ref: useRef<HTMLDivElement>(null),
      title: 'Portfolios Personnalisés',
      description: 'Créez des portfolios visuellement attrayants.',
      image: 'inflatable-puffy-pastel-plant-render-1.png',
      offset: ['-30vh', '-10vw']
    },
    {
      textColor: '',
      ref: useRef<HTMLDivElement>(null),
      title: 'Outils de Collaboration',
      description: 'Intégration de chats, de partage de fichiers, etc.',
      image: 'light-pink-donut-shaped-inflatable-form-3.png',
      offset: ['10vh', '80vw']
    },
    {
      textColor: '',
      ref: useRef<HTMLDivElement>(null),
      title: 'Suivi des tâches et des délais.',
      description: 'Suivi des tâches et des délais.',

      image: 'abstract-green-knit-inflatable-shape.png',
      offset: ['100vh', '40vw']
    }
  ];

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      let index = rect.top > 0 ? -1 : 0;
      sections.forEach((e) => {
        if (!e.ref.current) return;
        if (
          e.ref.current.offsetTop + e.ref.current.getBoundingClientRect().top >
          -rect.top
        )
          return;
        index++;
      });

      setSectionIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIndex]);

  const image = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "photo-of-hand-holding-an-iphone-7.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
        }
      }
    }
  `);

  return (
    <section {...props}>
      <div className="relative" ref={ref}>
        <div
          className={`h-screen  w-screen sticky top-0 z-50 bg-neutral overflow-hidden transition-all duration-300 ${sectionIndex > 2 ? 'bg-neutral-900' : 'bg-transparent'} z-100`}
        >
          {sections.map((e) => (
            <AnimatePresence>
              {sectionIndex > sections.indexOf(e) - 1 && (
                <motion.div
                  className={`absolute`}
                  style={{
                    top: e.offset[0],
                    left: e.offset[1],
                    width: `${10 * (sections.indexOf(e) + 2)}vw`
                  }}
                  transition={{ duration: 0.5 }}
                  initial={{ opacity: 0, y: 75, x: 75 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: 75, x: 75 }}
                >
                  <ImageScrollAnimation
                    transform={[
                      window.screen.height,
                      -window.screen.height * (sections.indexOf(e) * 2)
                    ]}
                    image={e.image}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          ))}

          <div className="flex justify-around backdrop-blur-sm items-center relative overflow-hidden">
            <div className="relative h-screen flex flex-col mx-auto justify-center text-neutral-900">
              <Accordion
                className={
                  sections[sectionIndex]?.textColor ??
                  (sectionIndex > 2 && 'text-white')
                }
                currentIndex={sectionIndex}
                items={sections.map((e) => ({
                  title: e.title,
                  description: e.description,
                  ref: e.ref
                }))}
              />
            </div>
            <div className="w-1/2">
              <GatsbyImage image={getImage(image.image)!} alt="" />
            </div>
          </div>
        </div>
        {sections.map((section, index) => (
          <div
            key={index}
            ref={section.ref}
            className="relative min-h-screen"
          ></div>
        ))}
      </div>
    </section>
  );
};
