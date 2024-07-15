import { graphql, useStaticQuery } from 'gatsby';
import {
  GatsbyImage,
  getImage,
} from 'gatsby-plugin-image';
import React from 'react';

interface DynamicImageProps {
  src: string;
  alt: string;
  query: any;
}

export const DynamicImage = ({ src, ...props }: DynamicImageProps) => {
  const imageData = useStaticQuery(graphql`
    query {
      image: allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
            }
          }
        }
      }
    }
  `);

  const image = getImage(
    imageData.image.edges.filter((e: any) => e.node.relativePath === src)[0]
      ?.node
  );

  return (image && <GatsbyImage image={image} {...props} />) || <div></div>;
};
