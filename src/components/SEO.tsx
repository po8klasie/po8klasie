import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { environment } from '../environments/environment';

const defaultTitle = 'WarsawLO';
const titleTemplate = '%s · WarsawLO';
const defaultDescription = 'Najprostsza i najszybsza wyszukiwarka warszawskich szkół średnich.';
const twitterUsername = 'warsawlo';
const siteUrl = environment.SITE_URL;

interface SEOProps {
  title: string;
  description?: string;
  isArticle?: boolean;
}

const SEO: FC<SEOProps> = ({ title, description, isArticle }) => {
  const { pathname } = useLocation();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(isArticle ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
    </Helmet>
  );
};

export default SEO;
