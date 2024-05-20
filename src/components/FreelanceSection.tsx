import React, { HTMLAttributes } from 'react';

interface FreelanceSectionProps extends HTMLAttributes<HTMLElement> {}

const content = [
  {
    title: 'Exposition Maximale',
    description:
      'Créez un portfolio en ligne époustouflant et mettez en avant votre style unique. Attirez l\'attention des meilleurs clients et faites-vous remarquer.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    )
  },
  {
    title: 'Réseau Professionnel',
    description:
      'Connectez-vous avec d\'autres talents créatifs, partagez vos idées, collaborez sur des projets inspirants et élargissez votre réseau.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white"></div>
    )
  },
  {
    title: 'Opportunités Illimitées',
    description:
      "Accédez à des projets sur mesure qui correspondent à vos compétences et passions. Postulez en un clic et commencez à travailler sur des missions qui vous inspirent.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    )
  }
];

export const FreelanceSection = ({ ...props }: FreelanceSectionProps) => {
  return (
    <section>
    </section>
  );
};
