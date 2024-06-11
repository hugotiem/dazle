'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue
} from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { DynamicImage } from './relative-path-image';
import { Star } from 'lucide-react';

export const HeroParallax = ({
  products
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-medium dark:text-white">
        CE QUE DISENT
        <br /> NOS UTILISATEURS
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Découvrez comment Dazle transforme les parcours professionnels de
        freelances et d'entreprises. Leurs témoignages inspirants révèlent
        comment notre plateforme facilite des collaborations exceptionnelles et
        des succès éclatants.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate
      }}
      whileHover={{
        y: -20
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 overflow-hidden"
    >
      <Link
        to={product.link}
        className="block h-full shadow-2xl p-5"
      >
        <div className="flex space-x-5">
          <div className="aspect-square h-20 bg-black rounded-full overflow-hidden">
            <DynamicImage
              src="light-pink-donut-shaped-inflatable-form-3.png"
              alt=""
            />
          </div>
          <div>
            <div className="text-xl font-medium">Name Surename</div>
            <div className="text-base font-light">@usename</div>
            <div className="flex">
              {[0, 0, 0, 0, 1].map((e) => (
                <Star />
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col mt-10">
          <p className="text-sm italic">
            "J'ai récemment utilisé Dazle pour trouver des
            freelances et je suis très satisfait ! La plateforme est intuitive
            et facile à naviguer. Les profils des freelances sont détaillés et
            les évaluations des clients précédents m'ont aidé à faire le bon
            choix. Les outils de gestion de projet intégrés simplifient
            grandement la communication et le suivi des tâches. Je recommande
            vivement cette plateforme à quiconque cherche des talents qualifiés
            et un service fiable."
          </p>
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full transition-all opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
