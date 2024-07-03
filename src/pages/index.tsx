import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import { SEO } from '../components/SEO';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
import { ImageScrollAnimation } from '../components/ui/image-scroll-animation';
import { Footer } from '../components/Footer';
import { FeatureSection } from '../components/FeatureSection';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import { TestimonialSection } from '../components/TestimonialSection';
import { AuroraBackground } from '../components/ui/aurora-background';
import { ArrowDown } from 'lucide-react';
import { ActionButton } from '../components/ActionButton';
import { FreelanceSection } from '../components/FreelanceSection';
import InfiniteLooper from '../components/ui/infinit-looper';
import { AdobeSvg } from '../components/svg/adobe.svg';
import { SpotifySvg } from '../components/svg/spotify.svg';
import { FigmaSvg } from '../components/svg/figma.svg';
import { FramerSvg } from '../components/svg/framer.svg';
import { WebflowSvg } from '../components/svg/webflow.svg';
import { NotionSvg } from '../components/svg/notion.svg';
import { GoogleSvg } from '../components/svg/google.svg';
import { TikTokSvg } from '../components/svg/tiktok.svg';
import { JoinBetaForm } from '../components/JoinBetaForm';
import { TextGradient } from '../components/ui/text-gradient';

const IndexPage: React.FC<PageProps> = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout className="max-w-screen relative">
      <Navbar className="absolute w-screen" />

      <div className="overflow-y-visible overflow-x-clip">
        <BackgroundGradientAnimation>
          <div className="absolute h-screen z-50 pointer-events-none">
            <div className="relative w-screen">
              <ImageScrollAnimation
                image="orange-glossy-inflatable-cube.png"
                transform={[0, -1000]}
                className="absolute w-full w-[70vw] top-[30vh] right-[-30vw]"
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
                  className="px-4 text-3xl sm:text-[5vw] 2xl:text-[60pt] font-light text-neutral-900 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto z-100"
                >
                  LA NOUVELLE ÈRE DU{' '}
                  <span className="bg-neutral-900 px-1 rounded">
                    <span className="before:bg-neutral-900 bg-gradient-to-r from-pink-300 via-purple-300 font-medium to-blue-300 text-transparent bg-clip-text">
                      FREELANCING
                    </span>
                  </span>{' '}
                  CREATIF
                </motion.h1>
                <div className="flex mx-auto space-x-3 mt-10 pointer-events-auto">
                  <ActionButton />
                  <button
                    className="bg-transparent border border-black mx-auto dark:bg-white text-xl rounded-full w-fit text-black dark:text-white px-8 py-3"
                    onClick={(e) => scrollRef?.current?.scrollIntoView()}
                  >
                    LIRE PLUS
                  </button>
                </div>
              </div>
            </div>
            <ImageScrollAnimation
              image="red-ring-inflatable-shape.png"
              className="absolute z-100 w-full w-[70vw] top-[10vh] left-[-20vw] w-[40vw]"
              transform={[0, -500]}
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
      <div className="flex flex-col items-center my-10 text-sm font-bold">
        <div>ILS S'INTERESSENT A NOUS</div>
        <InfiniteLooper direction="left" speed={15}>
          <AdobeSvg />
          <SpotifySvg />
          <FigmaSvg />
          <FramerSvg />
          <WebflowSvg />
          <NotionSvg />
          <GoogleSvg />
          <TikTokSvg />
        </InfiniteLooper>
      </div>
      <div className="space-y-10" ref={scrollRef}>
        <FeatureSection
          tag="Feed"
          title="Découvrez et connectez-vous : transformez votre feed Dazle en source d'inspiration et d'opportunités"
          reversed={false}
          image="dazle-feed.png"
          items={[
            <span>
              Explorez votre feed pour découvrir, vous inspirer et interagir.
              C'est un espace où les idées et les{' '}
              <TextGradient>opportunités</TextGradient> se révèlent.
            </span>,
            <span>
              <TextGradient>Personnalisez</TextGradient> votre feed pour
              refléter vos intérêts et aspirations. Suivez des projets et
              créateurs en accord avec votre <TextGradient>vision</TextGradient>
              .
            </span>,
            <span>
              Restez connecté avec la communauté. Commentez, partagez et
              engagez-vous avec le travail des autres.
            </span>,
            <span>
              <TextGradient>Restez à jour</TextGradient> avec les nouvelles de
              l'industrie et les succès de vos collègues. Nourrissez votre
              créativité et trouvez <TextGradient>l'inspiration</TextGradient>{' '}
              quotidienne.
            </span>
          ]}
        />
        <FeatureSection
          tag="Profil"
          image="dazle-profile.png"
          title="Montrez votre unicité : transformez votre profil Dazle en vitrine professionnelle"
          reversed
          items={[
            <span>
              Votre profil sur Dazle est plus qu'une page : c'est l'expression
              de <TextGradient>votre identité</TextGradient> professionnelle,
              votre vision et votre parcours.
            </span>,
            <span>
              Présentez-vous de manière <TextGradient>authentique</TextGradient>
              . Ajoutez une photo, une biographie, et détaillez vos compétences
              et expériences. Chaque élément compose votre histoire unique.
            </span>,
            <span>
              Votre profil est votre <TextGradient>vitrine</TextGradient>{' '}
              personnelle. Exprimez vos passions, ambitions et réalisations avec
              des descriptions captivantes. Montrez ce que vous faites et
              pourquoi.
            </span>,
            <span>
              <TextGradient>Soyez vous-même</TextGradient> pour attirer les
              bonnes connexions et collaborations. Votre profil sur Dazle est
              votre espace pour briller et vous démarquer.
            </span>
          ]}
        />
        <FeatureSection
          tag="Portefolio"
          title="Montrez votre talent : transformez votre portfolio Dazle en galerie vivante"
          reversed={false}
          image="dazle-portefolio.png"
          items={[
            <span>
              Votre portfolio est plus qu'une collection de travaux; c'est une{' '}
              <TextGradient>galerie</TextGradient> vivante illustrant votre
              parcours et vos compétences. Ajoutez des projets marquants pour
              créer un tableau authentique de vos réalisations.
            </span>,
            <span>
              Chaque détail compte : descriptions précises et images percutantes
              capturant l'essence de votre travail.{' '}
              <TextGradient>Partagez</TextGradient> ce qui vous motive et
              passionne.
            </span>,
            <span>
              Un portfolio authentique attire l'attention et les{' '}
              <TextGradient>opportunités</TextGradient>. Vos futurs clients
              veulent découvrir la personne derrière les œuvres. Partagez{' '}
              <TextGradient>votre regard</TextGradient> et votre approche pour
              créer des connexions durables.
            </span>,
            <span>
              C'est votre espace pour briller. Soyez authentique,{' '}
              <TextGradient>unique</TextGradient>, et laissez votre portfolio
              raconter votre histoire de manière mémorable.
            </span>
          ]}
        />
      </div>
      <div className="w-[75%] h-[1px] bg-neutral-200 mx-auto my-20"></div>
      <FreelanceSection />
      <div className="w-[75%] h-[1px] bg-neutral-200 mx-auto my-20"></div>
      <div className="absolute top-0 bg-gradient-to-b from-white to-transparent h-[100px]"></div>
      <TestimonialSection />
      <JoinBetaForm />
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
