import React, { HTMLAttributes } from 'react';
import { HeroParallax } from './ui/hero-parallax';

const products = [
  {
    title: 'Moonbeam',
    name: 'Jean Dupont',
    username: '@jeandupont',
    rate: 5,
    comment:
      '"Dazle a révolutionné ma manière de trouver des freelances. La plateforme est conviviale et les profils sont très bien détaillés. Je suis très impressionné par la qualité des talents disponibles."',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'https://xsgames.co/randomusers/assets/avatars/male/10.jpg'
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    name: 'Marie Martin',
    username: '@mariemartin',
    rate: 4,
    comment:
      '"J\'ai utilisé Dazle pour un projet urgent et j\'ai trouvé le freelance parfait en quelques minutes. Les outils de gestion de projet intégrés facilitent vraiment la communication."',
    thumbnail:
      'https://xsgames.co/randomusers/assets/avatars/female/21.jpg'
  },
  {
    title: 'Rogue',
    name: 'Lucie Bernard',
    username: '@luciebernard',
    rate: 5,
    comment:
      '"La simplicité d\'utilisation de Dazle est incroyable. Les évaluations des freelances m\'ont beaucoup aidé à faire un choix éclairé pour mon projet."',
    link: 'https://userogue.com',
    thumbnail: 'https://i.pravatar.cc/400?img=29'
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    name: 'Pierre Dubois',
    username: '@pierredubois',
    comment:
      '"Dazle est une bonne plateforme, mais j\'aimerais voir plus de filtres de recherche pour affiner les résultats. Néanmoins, j\'ai trouvé un freelance compétent."',
    rate: 3,
    thumbnail:
      'https://i.pravatar.cc/400?img=13'
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    name: 'Sophie Lefevre',
    username: '@sophielefevre',
    comment:
      '"J\'ai trouvé Dazle très utile pour gérer plusieurs projets simultanément. Les profils sont détaillés et la communication est fluide grâce à la plateforme."',
    rate: 4,
    thumbnail:
      'https://i.pravatar.cc/400?img=26'
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    name: 'Marc Moreau',
    username: '@marcmoreau',
    rate: 5,
    comment:
      '"Dazle m\'a permis de trouver rapidement des freelances très qualifiés. Les outils de gestion de projet sont un vrai plus pour suivre l\'avancement des tâches."',
    thumbnail:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    name: 'Emma Petit',
    username: '@emmapetit',
    rate: 4,
    comment:
      "\"Je suis satisfaite de Dazle, mais je pense qu'il y a encore des améliorations à faire au niveau de l'interface utilisateur. Les freelances que j'ai trouvés étaient très compétents.\"",
    thumbnail:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    name: 'David Richard',
    username: '@davidrichard',
    rate: 3,
    comment:
      "\"La plateforme Dazle est bonne, mais j'ai rencontré quelques bugs lors de l'utilisation. Malgré cela, j'ai pu embaucher un bon freelance pour mon projet.\"",
    thumbnail:
      'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    name: 'Julie Roux',
    username: '@julieroux',
    rate: 5,
    comment:
      ' "Dazle est la meilleure plateforme de freelancing que j\'ai utilisée. La gestion de projet est simple et efficace, et les freelances disponibles sont de grande qualité."',
    thumbnail:
      'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    name: 'Maxime Simon',
    username: '@maximesimon',
    rate: 4,
    comment:
      '"Je recommande Dazle à tous ceux qui cherchent des freelances. La plateforme est facile à utiliser et les profils sont bien détaillés, ce qui aide beaucoup dans la sélection."',
    thumbnail:
      'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxyYW5kb20lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Renderwork Studio',
    name: 'Claire Robert',
    username: '@clairerobert',
    rate: 5,
    comment:
      '"Dazle a facilité la recherche de freelances pour mes projets. La communication est fluide grâce aux outils intégrés et les freelances sont très professionnels."',
    link: 'https://renderwork.studio',
    thumbnail:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxyYW5kb20lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D'
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    name: 'Thomas Dubreuil',
    rate: 4,
    username: '@thomadubreil',
    comment:
      '"Dazle m\'a permis de trouver des freelances talentueux en un rien de temps. La plateforme est facile à naviguer et les profils sont bien renseignés."',
    thumbnail:
      'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxyYW5kb20lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    name: 'Nicolas Perrin',
    username: '@nicolasperrin',
    rate: 3,
    comment:
      ' "La plateforme est bonne, mais elle pourrait être améliorée. J\'ai rencontré quelques difficultés techniques, mais j\'ai quand même trouvé un freelance compétent."',
    thumbnail:
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D'
  },
  {
    name: 'Laura Girard',
    username: '@lauragirard',
    rate: 4,
    comment:
      '"Dazle est une excellente plateforme pour trouver des freelances. La gestion de projet est simple et les freelances sont très réactifs et professionnels."',
    thumbnail:
      'https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D'
  },
  {
    title: 'E Free Invoice',
    name: 'Alexandre Michel',
    username: '@alexandremichel',
    comment:
      '"Dazle a surpassé mes attentes. Les freelances disponibles sont très talentueux et les outils de gestion de projet rendent la collaboration facile et efficace."',
    rate: 5,
    link: 'https://efreeinvoice.com',
    thumbnail:
      'https://images.unsplash.com/photo-1484688493527-670f98f9b195?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8Mg%3D%3D'
  }
];

interface TestimonialSectionProps extends HTMLAttributes<HTMLElement> {}

export const TestimonialSection = ({ ...props }: TestimonialSectionProps) => {
  return (
    <section {...props}>
      <HeroParallax products={products} />
    </section>
  );
};
