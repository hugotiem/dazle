import React, { useState } from 'react';
import { AuroraBackground } from './ui/aurora-background';
import { motion } from 'framer-motion';

import { useToast } from '@/components/ui/use-toast';

export const JoinBetaForm = () => {
  const [other, setOther] = React.useState(false);

  const [isLoading, setLoading] = useState(false);

  const [text, setText] = useState({
    title: 'Propulsez votre créativité encore plus loin.',
    description: 'Rejoins la Bêta maintenant.'
  });

  const [formData, setFormData] = useState({
    job: '',
    email: '',
    phoneNumber: ''
  });

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    fetch(process.env.SIGN_UP_FUNCTION_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(async (res) => {
        if (!res.ok) throw Error('an error has occurred');
        // const body = await res.json();
        toast({
          title: 'Inscription réussi',
          description: 'Votre inscription a bien été prise en compte.'
        });

        setText({
          title: 'Merci d\'avoir rejoint la Bêta !',
          description: 'Nous vous contacterons au plus vite.'
        })
      })
      .catch((e) => {
        console.error('API ERROR: ', e);
        toast({
          title: "Echec de l'inscription",
          description:
            "Une erreur est survenue lors de l'inscription. Veuillez réessayer plus tard."
        });
      })
      .finally(() => setLoading(false));
  };

  return (
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
          {text.title}
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          {text.description}
        </div>
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full flex flex-col space-y-4">
          <input
            className="p-3 border rounded-xl focus-visible:outline-none"
            type="email"
            name="email"
            placeholder="Entrez votre email"
            id="email"
            onChange={handleInputChange}
          />
          <select
            name="pets"
            id="pet-select"
            className="p-3 w-full border rounded-xl focus-visible:outline-none cursor-pointer"
            style={{
              WebkitAppearance: 'none'
            }}
            onChange={(e) => {
              const isOther = e.target.value === 'other';
              setOther(isOther);
              if (!isOther) {
                const { value } = e.target;
                setFormData({ ...formData, job: value });
              } else {
                setFormData({ ...formData, job: '' });
              }
            }}
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
              name="job"
              placeholder="Entrez votre profession"
              id="job"
              value={formData.job}
              onChange={handleInputChange}
            />
          )}
          <input
            className="p-3 w-full border rounded-xl focus-visible:outline-none"
            type="tel"
            name="phoneNumber"
            placeholder="Entrez votre téléphone (optionnel)"
            id="phoneNumber"
            onChange={handleInputChange}
          />
        </div>

        <button
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
          disabled={isLoading}
          onClick={sendForm}
        >
          REJOINDRE
        </button>
      </motion.div>
    </AuroraBackground>
  );
};
