import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

// when updating, please adjust meta tags in index.html accordingly
const defaultTitle = 'WarsawLO';
const titleTemplate = '%s · WarsawLO';
const defaultDescription = 'Najprostsza i najszybsza wyszukiwarka warszawskich szkół średnich';
const twitterUsername = 'warsawlo';

interface SEOProps {
  title: string;
  description?: string;
  isArticle?: boolean;
}

const SEO: FC<SEOProps> = ({ title, description, isArticle }) => {
  const { href } = useLocation();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: href,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      {isArticle && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </Helmet>
  );
};

export default SEO;
