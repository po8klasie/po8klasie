import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Jumbotron from '../components/Jumbotron';
import styled from '../styling/styled';

interface LandingPageProps extends RouteComponentProps {}

const BrowseSchoolsLink = styled(Link)`
  text-decoration: none;
  background: white;
  color: black;
  padding: 0.5em 1em;
  margin-top: 1em;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  i {
    transition: transform 0.3s;
  }
  &:hover {
    i {
      transform: translateX(5px);
    }
  }
`;
const LandingPage: FC<LandingPageProps> = props => {
  return (
    <Layout>
      <Container>
        <Jumbotron
          bgImage={require('../assets/images/road.jpg')}
          bgPosition="right 70%"
        >
          <h3>Wybierz z nami swoją drogę!</h3>
          <p>
            Nie wiesz którą szkołę wybrać? Rekrutacja do szkół średnich to
            poważna sprawa. <br />
            W tym roku jednak będzie on znacznie prostszy. <br />
            Znajdź szkołę swoich marzeń za trzecim klknięciem.
          </p>
          <BrowseSchoolsLink to="/schools">
            Przeglądaj szkoły
            <i className="material-icons">chevron_right</i>
          </BrowseSchoolsLink>
        </Jumbotron>
      </Container>
    </Layout>
  );
};

export default LandingPage;
