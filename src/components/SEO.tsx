import React from 'react';

interface SEOProps {
  title: string;
  children: React.JSX.Element;
}

export const SEO = ({ children, title }: SEOProps) => (
  <>
    <title>{title}</title>
    <link id="icon" rel="icon" href="global-icon" />
    {children}
  </>
);
