import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import Accordion from './ui/accordion';
import { DynamicImage } from './ui/relative-path-image';
import { ImageScrollAnimation } from './ui/image-scroll-animation';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { ActionButton } from './ActionButton';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';

interface FeatureSectionProps extends HTMLAttributes<HTMLElement> {
  items: React.JSX.Element[];
  image: string;
  reversed: boolean;
  tag: string;
  title: string;
  query: any;
}

export const FeatureSection = ({
  items,
  reversed,
  image,
  tag,
  title,
  query,
  ...props
}: FeatureSectionProps) => {
  return (
    <section className="relative overflow-x-clip">
      <div className="absolute top-0 z-0">
        <BackgroundGradientAnimation containerClassName="opacity-50"></BackgroundGradientAnimation>
      </div>
      <div
        className={cn(
          'flex flex-col-reverse md:flex-row md:mx-20 space-y-5 items-center mx-10 relative z-50',
          reversed ? 'md:flex-row-reverse' : ''
        )}
      >
        <div className="flex flex-1 flex-col items-start space-y-7">
          <div className="bg-neutral-900 px-2 rounded">
            <div className="font-black bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-transparent bg-clip-text">
              {tag.toUpperCase()}
            </div>
          </div>
          <div className="font-bold text-2xl">{title}</div>
          <div className="space-y-3">
            {items.map((e) => (
              <div key={items.indexOf(e)} className="flex space-x-4">
                <div className="flex-none mt-2 h-3 w-3 rounded-full bg-neutral-900"></div>
                <div className="flex-1 text-xl text-neutral-500 font-medium">
                  {e}
                </div>
              </div>
            ))}
          </div>
          <ActionButton className="event-pointer-auto" />
        </div>
        <div className="w-20"></div>
        <div className="flex-1">
          <div className="aspect-square mt-5 bg-gradient-to-tr h-full w-full from-blue-400 via-pink-400 to-white rounded-3xl overflow-hidden lg:scale-[.8] flex flex-col justify-center">
            <div className="translate-x-[10%] ">
              <div className="h-full w-[110%] sm:mx-0 flex flex-col justify-center">
                <figure className="ms-auto relative z-[1] max-w-full h-auto overflow-hidden rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
                  <div className="relative flex items-center bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                    <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                      <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                      <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                      <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                    </div>
                    <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
                      www.dazle.fr
                    </div>
                  </div>

                  <div className="relative bg-white rounded-b-lg aspect-video">
                    <div className=" w-full h-full">
                      <DynamicImage query={query} src={image} alt="" />
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const FeatureSection = ({ ...props }: FeatureSectionProps) => {
//   const [sectionIndex, setSectionIndex] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);

//   const sections = [
//     {
//       textColor: '',
//       ref: useRef<HTMLDivElement>(null),
//       title: 'Portfolios Personnalisés',
//       description: 'Créez des portfolios visuellement attrayants.',
//       image: 'inflatable-puffy-pastel-plant-render-1.png',
//       featureImage: 'dazle-feed.png',
//       offset: ['-30vh', '-10vw']
//     },
//     {
//       textColor: '',
//       ref: useRef<HTMLDivElement>(null),
//       title: 'Outils de Collaboration',
//       description: 'Intégration de chats, de partage de fichiers, etc.',
//       image: 'light-pink-donut-shaped-inflatable-form-3.png',
//       featureImage: 'dazle-portefolio.png',
//       offset: ['10vh', '80vw']
//     },
//     {
//       textColor: '',
//       ref: useRef<HTMLDivElement>(null),
//       title: 'Suivi des tâches et des délais.',
//       description: 'Suivi des tâches et des délais.',
//       featureImage: 'dazle-profile.png',
//       image: 'abstract-green-knit-inflatable-shape.png',
//       offset: ['100vh', '40vw']
//     }
//   ];

//   const handleScroll = () => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       let index = rect.top > 0 ? -1 : 0;
//       sections.forEach((e) => {
//         if (!e.ref.current) return;
//         if (
//           e.ref.current.offsetTop + e.ref.current.getBoundingClientRect().top >
//           -rect.top
//         )
//           return;
//         index++;
//       });

//       setSectionIndex(index);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [sectionIndex]);

//   return (
//     <section {...props}>
//       <div className="relative" ref={ref}>
//         <div
//           className={`h-screen w-screen sticky top-0 z-50 bg-neutral overflow-hidden transition-all duration-300 z-100`}
//         >
//           {sections.map((e) => (
//             <AnimatePresence>
//               {sectionIndex > sections.indexOf(e) - 1 && (
//                 <motion.div
//                   className={`absolute`}
//                   style={{
//                     top: e.offset[0],
//                     left: e.offset[1],
//                     width: `${10 * (sections.indexOf(e) + 2)}vw`
//                   }}
//                   transition={{ duration: 0.5 }}
//                   initial={{ opacity: 0, y: 75, x: 75 }}
//                   animate={{ opacity: 1, y: 0, x: 0 }}
//                   exit={{ opacity: 0, y: 75, x: 75 }}
//                 >
//                   <ImageScrollAnimation
//                     transform={[
//                       window.screen.height,
//                       -window.screen.height * (sections.indexOf(e) * 2)
//                     ]}
//                     image={e.image}
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           ))}

//           <div className="h-screen sm:h-auto flex flex-col-reverse sm:flex-row sm:justify-around justify-center backdrop-blur-sm items-center relative overflow-hidden">
//             <div className="relative sm:h-screen sm:w-auto w-11/12 flex flex-col sm:mt-auto mt-10 mx-auto justify-center text-neutral-900">
//               <Accordion
//                 className={
//                   sections[sectionIndex]?.textColor ??
//                   (sectionIndex > 2 && 'text-white')
//                 }
//                 currentIndex={sectionIndex}
//                 items={sections.map((e) => ({
//                   title: e.title,
//                   description: e.description,
//                   ref: e.ref
//                 }))}
//               />
//             </div>
//             <div className="sm:w-1/2 sm:mx-0 w-11/12 sm:h-auto h-1/4 sm:pr-10 h-screen flex flex-col justify-center">
//               <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
//                 <div className="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
//                   <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
//                     <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
//                     <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
//                     <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
//                   </div>
//                   <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
//                     www.dazle.fr
//                   </div>
//                 </div>

//                 <div className="relative bg-white rounded-b-lg aspect-video">
//                   {sections.map(
//                     (image, index) =>
//                       index === sectionIndex && (
//                         <motion.div
//                           key={image.featureImage}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.4 }}
//                           className=" w-full h-full"
//                         >
//                           <DynamicImage
//                             src={image.featureImage}
//                             alt=""
//                           />
//                         </motion.div>
//                       )
//                   )}

//                 </div>
//               </figure>
//             </div>
//           </div>
//         </div>
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             ref={section.ref}
//             className="relative min-h-screen"
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };
