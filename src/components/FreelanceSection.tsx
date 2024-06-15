import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { FadeCard } from './ui/fade-card';
import { FlipWords } from './ui/flip-words';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import {
  GalleryVerticalEnd,
  GraduationCap,
  PencilRuler,
  Sparkles
} from 'lucide-react';
import { LiaUsersSolid } from 'react-icons/lia';
import { GiProcessor } from 'react-icons/gi';

const sections = [
  {
    title: 'FREELANCES',
    description:
      ' Vous êtes créatif ? Débutant, pro ou vétéran, Dazle est votre tremplin vers le succès.',
    bgColor: 'bg-[#ECEEE4]',
    section: 'FREELANCES',
    items: [
      {
        logo: <GraduationCap />,
        title: 'Accédez à des Opportunités Exclusives',
        description:
          'Accédez à des projets exclusifs adaptés à vos compétences et intérêts. Trouvez des missions qui vous passionnent et développez votre carrière freelance avec des clients de qualité.'
      },
      {
        logo: <LiaUsersSolid size={35} />,
        title: 'Rejoignez une Communauté de Créatifs',
        description:
          "Rejoignez une communauté dynamique de freelances et de créatifs. Échangez, collaborez et grandissez ensemble dans un environnement de soutien et d'inspiration."
      },
      {
        logo: <GalleryVerticalEnd />,
        title: 'Créez un Portfolio à votre image',
        description:
          "Créez un portfolio en ligne époustouflant et mettez en avant votre style unique. Attirez l'attention des meilleurs clients et faites-vous remarquer."
      }
    ]
  },
  {
    title: 'ENTREPRISES',
    description:
      'Développez votre vision avec les meilleurs talents créatifs du marché.',
    bgColor: 'bg-[#FECCC0]',
    section: 'ENTREPRISES',
    items: [
      {
        logo: <PencilRuler />,
        title: 'Découvrez des Talents Exceptionnels',
        description:
          'Découvrez et engagez des freelances hautement qualifiés pour vos projets. Accédez à un vivier de talents diversifiés et sélectionnez les meilleurs profils pour répondre à vos besoins spécifiques.'
      },
      {
        logo: <Sparkles />,
        title:
          "Utilisez un Algorithme Avancé via l'IA pour Trouver le Talent Idéal",
        description:
          "Profitez de notre algorithme avancé basé sur l'IA pour rechercher des freelances par domaine de compétence, style et bien plus. Assurez-vous de trouver le talent parfait pour vos projets spécifiques."
      },
      {
        logo: <GiProcessor size={30} />,
        title: 'Comprenez Mieux le Processus Créatif',
        description:
          'En voyant le profil détaillé du freelance, vous savez qui vous avez en face de vous. Vous comprenez mieux comment il construit ses idées. Cela vous permet de mieux comprendre son processus créatif, de faire des sélections plus éclairées.'
      }
    ]
  }
];

interface FreelanceSectionProps extends HTMLAttributes<HTMLElement> {}

export const FreelanceSection = ({ ...props }: FreelanceSectionProps) => {
  return (
    <section className="relative overflow-x-clip">
      <div className="absolute top-0 ">
        <BackgroundGradientAnimation containerClassName="opacity-50"></BackgroundGradientAnimation>
      </div>

      <div className="relative z-50 space-y-32">
        {sections.map((e, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-3xl font-bold my-5"> {e.title} </div>
            <div className="sm:flex sm:mx-0 mx-5 sm:space-y-0 space-y-5 justify-center sm:space-x-5">
              {e.items.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[400px] rounded-t-md rounded-b-xl overflow-clip border border-neutral-100 bg-slate-100/50"
                >
                  <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 h-2"></div>
                  <div className="p-5 space-y-6">
                    <div>{item.logo}</div>
                    <div className="text-2xl font-medium"> {item.title} </div>
                    <div className="font-light text-lg">
                      {' '}
                      {item.description}{' '}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// const ScrollSection = ({
//   title,
//   description,
//   children,
//   className,
//   bgColor,
//   ...props
// }: ScrollSectionProps) => {
//   const [ref, inView] = useInView({ threshold: 0 });
//   const springProps = useSpring({
//     // transform: inView ? 'translateY(0%)' : 'translateY(100%)',
//     opacity: inView ? 1 : 0
//   });

//   return (
//     <div
//       ref={ref}
//       className={cn(`min-h-screen flex items-center justify-center`, className)}
//       {...props}
//     >
//       <animated.div style={springProps} className="rounded-lg shadow-lg">
//         {children}
//       </animated.div>
//     </div>
//   );
// };

// const FreelanceSection = () => {
//   const [sectionIndex, setSectionIndex] = useState(0);
//   const scrollDemoRef = useRef<HTMLDivElement>(null);

//   const animation = useAnimation();
//   const animation1 = useAnimation();

//   const handleScroll = () => {
//     if (scrollDemoRef.current) {
//       const rect = scrollDemoRef.current.getBoundingClientRect();
//       const currentSection = Math.floor((-rect.top / rect.height) * 3);
//       setSectionIndex(currentSection);
//     }
//   };

//   useEffect(() => {
//     if (sectionIndex == 0) {
//       animation.start('visible');
//       animation1.start('hidden');
//     } else if (sectionIndex == 1) {
//       animation1.start('visible');
//       animation.start('hidden');
//     } else {
//       animation1.start('hidden');
//       animation.start('hidden');
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [sectionIndex]);

//

//   return (
//     <div className="relative" ref={scrollDemoRef}>
//       <div
//         className={`h-screen w-screen sticky top-0 z-50 bg-neutral overflow-hidden  transition-all duration-300 ${sections[sectionIndex]?.bgColor} z-100`}
//       >
//         <div className="relative overflow-hidden">
//           {sections.map((e, index) => (
//             <div key={e.title}> {e.icon}</div>
//           ))}

//           <div className="relative h-screen flex flex-col container mx-auto px-3 justify-center sm:translate-y-[-60px] text-neutral-900">
//             <div className="relative">
//               <div className="font-medium lg:text-6xl text-2xl">
//                 POUR LES
//                 <FlipWords
//                   word={sections[sectionIndex < 0 ? 0 : sectionIndex > 1 ? 1 : sectionIndex]?.section}
//                   index={sectionIndex > -1 ? 0 : sectionIndex}
//                 />
//               </div>
//             </div>
//             {/* <div className="font-light lg:text-xl text-base mb-10">
//               {sections[sectionIndex]?.description}
//             </div> */}
//             <div className="relative sm:mt-20 mt-10">
//               <div className="opacity-0 mx-auto flex max-w-6xl flex-col justify-center space-y-8 xl:flex-row xl:space-y-0 xl:space-x-12">
//                 <FadeCard
//                   hide={sectionIndex > 0}
//                   title=" Exposition Maximale"
//                   description=" Créez un portfolio en ligne époustouflant et mettez en avant
//                   votre style unique. Attirez l'attention des meilleurs clients
//                   et faites-vous remarquer."
//                 />

//                 <FadeCard
//                   hide={sectionIndex > 0}
//                   title=" Réseau Professionnel"
//                   description=" Connectez-vous avec d'autres talents créatifs, partagez vos idées, collaborez sur des projets inspirants et élargissez votre réseau."
//                   delay={0.1}
//                 />
//                 <FadeCard
//                   hide={sectionIndex > 0}
//                   title=" Opportunités Illimitées"
//                   description=" Accédez à des projets sur mesure qui correspondent à vos compétences et passions. Postulez en un clic et commencez à travailler sur des missions qui vous inspirent."
//                   delay={0.2}
//                 />
//               </div>
//               <div className=" mx-auto absolute top-0 flex max-w-6xl flex-col justify-center space-y-8 xl:flex-row xl:space-y-0 xl:space-x-12">
//                 <FadeCard
//                   hide={sectionIndex > 0}
//                   title=" Exposition Maximale"
//                   description=" Créez un portfolio en ligne époustouflant et mettez en avant
//                   votre style unique. Attirez l'attention des meilleurs clients
//                   et faites-vous remarquer."
//                 />

//                 <FadeCard
//                   hide={sectionIndex > 0}
//                   title=" Réseau Professionnel"
//                   description=" Connectez-vous avec d'autres talents créatifs, partagez vos idées, collaborez sur des projets inspirants et élargissez votre réseau."
//                   delay={0.1}
//                 />
//                 <FadeCard
//                   hide={sectionIndex > 0}
//                   title=" Opportunités Illimitées"
//                   description=" Accédez à des projets sur mesure qui correspondent à vos compétences et passions. Postulez en un clic et commencez à travailler sur des missions qui vous inspirent."
//                   delay={0.2}
//                 />
//               </div>
//               <div className=" mx-auto absolute top-0 flex max-w-6xl flex-col justify-center space-y-8 xl:flex-row xl:space-y-0 xl:space-x-12">
//                 <FadeCard
//                   hide={sectionIndex < 1}
//                   title="Trouver les Meilleurs Talents"
//                   description="Parcourez des portfolios soigneusement présentés pour trouver les créatifs parfaits pour vos projets. Assurez-vous de la qualité avec des profils vérifiés et des retours authentiques."
//                 />

//                 <FadeCard
//                   hide={sectionIndex < 1}
//                   title="Gestion de Projet Simplifiée"
//                   description="Utilisez nos outils de gestion de projet intégrés pour suivre les progrès, communiquer efficacement et garantir des livraisons ponctuelles et de haute qualité."
//                   delay={0.1}
//                 />
//                 <FadeCard
//                   hide={sectionIndex < 1}
//                   title="Publication Rapide et Facile"
//                   description="Publiez vos offres de projet en quelques minutes et recevez des propositions de freelances qualifiés prêts à transformer vos idées en réalité."
//                   delay={0.2}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {sections.map((section, index) => (
//         <ScrollSection
//           key={index}
//           title={section.title}
//           description={section.description}
//           bgColor={section.bgColor}
//           className="relative"
//         ></ScrollSection>
//       ))}
//     </div>
//   );
// };

// export default FreelanceSection;
