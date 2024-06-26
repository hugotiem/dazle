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

const IndexPage: React.FC<PageProps> = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const [other, setOther] = React.useState(false);

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
                    LEARN MORE
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
            "Explorez votre feed pour découvrir, vous inspirer et interagir. C'est un espace où les idées et les <strong>opportunités</strong> se révèlent.",
            '<strong>Personnalisez</strong> votre feed pour refléter vos intérêts et aspirations. Suivez des projets et créateurs en accord avec votre <strong>vision</strong>.',
            'Restez connecté avec la communauté. Commentez, partagez et engagez-vous avec le travail des autres.',
            "<strong>Restez à jour</strong> avec les nouvelles de l'industrie et les succès de vos collègues. Nourrissez votre créativité et trouvez <strong>l'inspiration</strong> quotidienne."
          ]}
        />
        <FeatureSection
          tag="Profil"
          image="dazle-profile.png"
          title="Montrez votre unicité : transformez votre profil Dazle en vitrine professionnelle"
          reversed
          items={[
            "Votre profil sur Dazle est plus qu'une page : c'est l'expression de <strong>votre identité</strong> professionnelle, votre vision et votre parcours.",
            'Présentez-vous de manière <strong>authentique</strong>. Ajoutez une photo, une biographie, et détaillez vos compétences et expériences. Chaque élément compose votre histoire unique.',
            'Votre profil est votre <strong>vitrine</strong> personnelle. Exprimez vos passions, ambitions et réalisations avec des descriptions captivantes. Montrez ce que vous faites et pourquoi.',
            '<strong>Soyez vous-même</strong> pour attirer les bonnes connexions et collaborations. Votre profil sur Dazle est votre espace pour briller et vous démarquer.'
          ]}
        />
        <FeatureSection
          tag="Portefolio"
          title="Montrez votre talent : transformez votre portfolio Dazle en galerie vivante"
          reversed={false}
          image="dazle-portefolio.png"
          items={[
            "Votre portfolio est plus qu'une collection de travaux; c'est une <strong>galerie</strong> vivante illustrant votre parcours et vos compétences. Ajoutez des projets marquants pour créer un tableau authentique de vos réalisations.",
            "Chaque détail compte : descriptions précises et images percutantes capturant l'essence de votre travail. <strong>Partagez</strong> ce qui vous motive et passionne.",
            "Un portfolio authentique attire l'attention et les <strong>opportunités</strong>. Vos futurs clients veulent découvrir la personne derrière les œuvres. Partagez <strong>votre regard</strong> et votre approche pour créer des connexions durables.",
            "C'est votre espace pour briller. Soyez authentique, <strong>unique</strong>, et laissez votre portfolio raconter votre histoire de manière mémorable."
          ]}
        />
      </div>
      <div className="w-[75%] h-[1px] bg-neutral-200 mx-auto my-20"></div>
      <FreelanceSection />
      <div className="w-[75%] h-[1px] bg-neutral-200 mx-auto my-20"></div>
      <div className="absolute top-0 bg-gradient-to-b from-white to-transparent h-[100px]"></div>
      <TestimonialSection />

      <AuroraBackground className="relative" id="join-wait-list-form">
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
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full flex flex-col space-y-4">
            <input
              className="p-3 border rounded-xl focus-visible:outline-none"
              type="email"
              name="email"
              placeholder="Entrez votre email"
              id="email"
            />
            <select
              name="pets"
              id="pet-select"
              className="p-3 w-full border rounded-xl focus-visible:outline-none cursor-pointer"
              style={{
                WebkitAppearance: 'none'
              }}
              onChange={(e) => setOther(e.target.value === 'other')}
            >
              <option value="">--Veuillez choisir une option--</option>
              <option value="graphiste">Graphiste</option>
              <option value="designer">Designer UX/UI</option>
              <option value="illustrateur">Illustrateur</option>
              <option value="photographe">Photographe</option>
              <option value="video-editeur">Vidéo-éditeur</option>
              <option value="animateur">Animateur 2D/3D</option>
              <option value="da">Directeur Artistique</option>
              <option value="musicien">Musicien/Compositeur</option>
              <option value="other">Autre</option>
            </select>
            {other && (
              <input
                className="p-3 w-full border rounded-xl focus-visible:outline-none"
                type="text"
                name="domain"
                placeholder="Entrez votre profession"
                id="domain"
              />
            )}
            <input
              className="p-3 w-full border rounded-xl focus-visible:outline-none"
              type="tel"
              name="tel"
              placeholder="Entrez votre téléphone (optionnel)"
              id="tel"
            />
          </div>

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
