import React, { FC } from 'react';
import Layout from './Layout';
import Container from './Container';
import PageTitle from './PageTitle';
import Breadcrumbs from './Breadcrumbs';

const ArticleLayout: FC<{ title: string }> = ({ children, title }) => (
  <Layout>
    <Container narrow={true}>
      <Breadcrumbs steps={[[title]]} />
      <PageTitle>{title}</PageTitle>
      {children}
    </Container>
  </Layout>
);

export default ArticleLayout;
