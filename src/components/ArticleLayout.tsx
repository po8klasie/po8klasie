import React, { FC } from 'react';
import Layout from './Layout';
import Container from './Container';
import PageTitle from './PageTitle';

const ArticleLayout: FC<{ title: string }> = ({ children, title }) => (
  <Layout>
    <Container narrow={true}>
      <PageTitle>{title}</PageTitle>
      {children}
    </Container>
  </Layout>
);

export default ArticleLayout;
