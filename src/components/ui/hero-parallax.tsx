'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue
} from 'framer-motion';
import { FaRegStar, FaStar } from 'react-icons/fa';

export const HeroParallax = ({
  products
}: {
  products: {
    thumbnail: string;
    name: string;
    username: string;
    comment: string;
    rate: number;
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
      className="md:h-[150em] h-[130em] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
              key={product.username}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.username}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.username}
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
    thumbnail: string;
    name: string;
    username: string;
    comment: string;
    rate: number;
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
      key={product.name}
      className="group/product h-72 w-[30rem] relative flex-shrink-0 overflow-hidden"
    >
      <div className="block h-full shadow-2xl p-5">
        <div className="flex space-x-5">
          <div className="aspect-square h-20 bg-black rounded-full overflow-hidden">
            <img src={product.thumbnail} alt="" />
            {/* <DynamicImage
              src="light-pink-donut-shaped-inflatable-form-3.png"
              alt=""
            /> */}
          </div>
          <div>
            <div className="text-xl font-medium">{product.name}</div>
            <div className="text-base font-light">{product.username}</div>
            <div className="flex space-x-1">
              {[0, 0, 0, 0, 0].map(
                (e, index) => {
                  const full = index < product.rate;
                  if (!full) return <FaRegStar color="grey" />;
                  return <FaStar color="orange" />;
                }
              )}
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col mt-10">
          <p className="text-sm italic">{product.comment}</p>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full transition-all opacity-0 group-hover/product:opacity-[.01] bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white"></h2>
    </motion.div>
  );
};
