import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { FadeCard } from './ui/fade-card';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { cn } from '../utils/cn';
import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';
import { motion, useAnimation } from 'framer-motion';
import { ImageScrollAnimation } from './ui/image-scroll-animation';
import { FlipWords } from './ui/flip-words';

interface ScrollSectionProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  description?: string;
  title?: string;
  bgColor: string;
}

const ScrollSection = ({
  title,
  description,
  children,
  className,
  bgColor,
  ...props
}: ScrollSectionProps) => {
  const [ref, inView] = useInView({ threshold: 0 });
  const springProps = useSpring({
    // transform: inView ? 'translateY(0%)' : 'translateY(100%)',
    opacity: inView ? 1 : 0
  });

  return (
    <div
      ref={ref}
      className={cn(`min-h-screen flex items-center justify-center`, className)}
      {...props}
    >
      <animated.div style={springProps} className="rounded-lg shadow-lg">
        {children}
      </animated.div>
    </div>
  );
};

const FreelanceSection = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const scrollDemoRef = useRef<HTMLDivElement>(null);

  const animation = useAnimation();
  const animation1 = useAnimation();

  const handleScroll = () => {
    if (scrollDemoRef.current) {
      const rect = scrollDemoRef.current.getBoundingClientRect();
      const currentSection = Math.floor((-rect.top / rect.height) * 3);
      setSectionIndex(currentSection);
    }
  };

  useEffect(() => {
    if (sectionIndex == 0) {
      animation.start('visible');
      animation1.start('hidden');
    } else if (sectionIndex == 1) {
      animation1.start('visible');
      animation.start('hidden');
    } else {
      animation1.start('hidden');
      animation.start('hidden');
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIndex]);

  const sections = [
    {
      title: 'Section 1',
      description:
        ' Vous êtes créatif ? Débutant, pro ou vétéran, Dazle est votre tremplin vers le succès.',
      bgColor: 'bg-[#ECEEE4]',
      section: 'FREELANCES',
      icon: (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, x: 75 },
            visible: { opacity: 1, y: 0, x: 0 }
          }}
          initial="hidden"
          animate={animation}
          transition={{ duration: 0.5 }}
          className="absolute left-[-20vw] w-[60vw]"
        >
          <ImageScrollAnimation
            transform={[500, 0]}
             image="orange-puffy-inflatable-flower.png"
          />
        </motion.div>
      )
    },
    {
      title: 'Section 2',
      description:
        'Développez votre vision avec les meilleurs talents créatifs du marché.',
      bgColor: 'bg-[#FECCC0]',
      section: 'ENTREPRISES',
      icon: (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75, x: 75 },
            visible: { opacity: 1, y: 0, x: 0 }
          }}
          initial="hidden"
          animate={animation1}
          transition={{ duration: 0.5 }}
          className="absolute right-[-20vw] w-[60vw]"
        >
          <ImageScrollAnimation
            transform={[500, 0]}
            image="puffy-inflatable-pastel-red-star.png"
           
          />
        </motion.div>
      )
    }
  ];

  return (
    <div className="relative" ref={scrollDemoRef}>
      <div
        className={`h-screen w-screen sticky top-0 z-50 bg-neutral overflow-hidden shadow-md transition-all duration-300 ${sections[sectionIndex]?.bgColor} z-100`}
      >
        <div className="relative overflow-hidden">
          {sections.map((e, index) => (
            <div key={e.title}> {e.icon}</div>
          ))}

          <div className="relative h-screen flex flex-col container mx-auto justify-center text-neutral-900">
            <div className="relative">
              <div className="font-medium text-6xl">
                POUR LES
                <FlipWords
                  word={sections[sectionIndex]?.section}
                  index={sectionIndex}
                />
              </div>
            </div>
            <div className="font-light text-xl mb-10">
              {sections[sectionIndex]?.description}
            </div>
            <div className="relative">
              <div className="opacity-0 mx-auto flex max-w-6xl flex-col justify-center space-y-8 xl:flex-row xl:space-y-0 xl:space-x-12">
                <FadeCard
                  hide={sectionIndex != 0}
                  title=" Exposition Maximale"
                  description=" Créez un portfolio en ligne époustouflant et mettez en avant
                  votre style unique. Attirez l'attention des meilleurs clients
                  et faites-vous remarquer."
                />

                <FadeCard
                  hide={sectionIndex != 0}
                  title=" Réseau Professionnel"
                  description=" Connectez-vous avec d'autres talents créatifs, partagez vos idées, collaborez sur des projets inspirants et élargissez votre réseau."
                  delay={0.1}
                />
                <FadeCard
                  hide={sectionIndex != 0}
                  title=" Opportunités Illimitées"
                  description=" Accédez à des projets sur mesure qui correspondent à vos compétences et passions. Postulez en un clic et commencez à travailler sur des missions qui vous inspirent."
                  delay={0.2}
                />
              </div>
              <div className=" mx-auto absolute top-0 flex max-w-6xl flex-col justify-center space-y-8 xl:flex-row xl:space-y-0 xl:space-x-12">
                <FadeCard
                  hide={sectionIndex != 0}
                  title=" Exposition Maximale"
                  description=" Créez un portfolio en ligne époustouflant et mettez en avant
                  votre style unique. Attirez l'attention des meilleurs clients
                  et faites-vous remarquer."
                />

                <FadeCard
                  hide={sectionIndex != 0}
                  title=" Réseau Professionnel"
                  description=" Connectez-vous avec d'autres talents créatifs, partagez vos idées, collaborez sur des projets inspirants et élargissez votre réseau."
                  delay={0.1}
                />
                <FadeCard
                  hide={sectionIndex != 0}
                  title=" Opportunités Illimitées"
                  description=" Accédez à des projets sur mesure qui correspondent à vos compétences et passions. Postulez en un clic et commencez à travailler sur des missions qui vous inspirent."
                  delay={0.2}
                />
              </div>
              <div className=" mx-auto absolute top-0 flex max-w-6xl flex-col justify-center space-y-8 xl:flex-row xl:space-y-0 xl:space-x-12">
                <FadeCard
                  hide={sectionIndex != 1}
                  title="Trouver les Meilleurs Talents"
                  description="Parcourez des portfolios soigneusement présentés pour trouver les créatifs parfaits pour vos projets. Assurez-vous de la qualité avec des profils vérifiés et des retours authentiques."
                />

                <FadeCard
                  hide={sectionIndex != 1}
                  title="Gestion de Projet Simplifiée"
                  description="Utilisez nos outils de gestion de projet intégrés pour suivre les progrès, communiquer efficacement et garantir des livraisons ponctuelles et de haute qualité."
                  delay={0.1}
                />
                <FadeCard
                  hide={sectionIndex != 1}
                  title="Publication Rapide et Facile"
                  description="Publiez vos offres de projet en quelques minutes et recevez des propositions de freelances qualifiés prêts à transformer vos idées en réalité."
                  delay={0.2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {sections.map((section, index) => (
        <ScrollSection
          key={index}
          title={section.title}
          description={section.description}
          bgColor={section.bgColor}
          className="relative"
        ></ScrollSection>
      ))}
    </div>
  );
};

export default FreelanceSection;
