import React, { FC } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import Paragraph from '../components/Paragraph';

const NotFoundPage: FC<RouteComponentProps> = () => {
    return (
        <Layout>
            <Container>
                <PageTitle>Nie znaleziono strony</PageTitle>
                <Paragraph>
                    <Link to="/">Wróć do strony głównej</Link>
                </Paragraph>
            </Container>
        </Layout>
    );
};

export default NotFoundPage;
