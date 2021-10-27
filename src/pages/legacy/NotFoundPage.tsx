import React, { FC } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import Paragraph from '../../components/Paragraph';
import SEO from '../../components/SEO';

const pageTitle = 'Nie znaleziono strony';

const NotFoundPage: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <PageTitle>{pageTitle}</PageTitle>
        <Paragraph>
          <Link to="/">Wróć do strony głównej</Link>
        </Paragraph>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
