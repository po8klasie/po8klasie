import React, { FC } from 'react';
import Layout from './Layout';
import Container from './Container';
import PageTitle from './PageTitle';
import Breadcrumbs from './Breadcrumbs';
import SEO from './SEO';

const ArticleLayout: FC<{ title: string }> = ({ children, title }) => (
  <Layout>
    <SEO title={title} isArticle />
    <Container narrow>
      <Breadcrumbs steps={[[title]]} />
      <PageTitle>{title}</PageTitle>
      {children}
    </Container>
  </Layout>
);

export default ArticleLayout;