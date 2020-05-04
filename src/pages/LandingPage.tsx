import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Jumbotron from '../components/Jumbotron';
import styled from '../styling/styled';
import Break from '../components/Break';
import Paragraph from '../components/Paragraph';
import { keyframes } from '@emotion/core';
import Logo from '../components/Logo';
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
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10vw;
  grid-row-gap: 2em;
`;
const Feature = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  i {
    font-size: 2em !important;
    margin-right: 1em;
  }
`;
const StripeWrapper = styled.div`
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0% 100%);
  padding-top: 5%;
  padding-bottom: 10%;
  background: #ebe0ff;
  margin-top: 10vh;
`;
const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
`;
const blink = keyframes`
  0%, 100%{
    transform: scale(1);
  }
  70%{
    transform: scale(1);
  }
  80%{
    transform: scale(1.1);
  }
  
`;
const slideAndFade = (x: any) => keyframes`
  0%{
    transform: translateY(0) translateX(0);
    opacity:1;
  }
  
  15%{
    transform: translateY(50%) translateX(${x}%);
    opacity:1;
  }
  25%{
    opacity:0;
    transform: translateY(50%) translateX(${x}%);
  }
  36%{
    opacity:0;
    transform: translateY(0) translateX(0);
  }
  100%{
    opacity:0;
  }
`;
const SourcesAnimation = styled('div')`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding-top: 0;
    margin-bottom: 1em;
  }
  .sources {
    margin-top: 10vh;
    @media (max-width: 1000px) {
      margin-top: 0;
    }
    display: flex;
    justify-content: space-around;
    svg {
      opacity: 0;
    }
    #max-left {
      animation: ${slideAndFade(70)} 12s ease 0s infinite;
    }
    #left {
      animation: ${slideAndFade(40)} 12s ease 3s infinite;
    }
    #right {
      animation: ${slideAndFade(-40)} 12s ease 6s infinite;
    }
    #max-right {
      animation: ${slideAndFade(-70)} 12s ease 9s infinite;
    }
  }
  .dest {
    animation: ${blink} 3s ease 0s infinite;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: normal;
    svg {
      width: 50%;
      fill: white;
    }
  }
`;
const CallToAction = styled(Link)`
  text-decoration: none;
  display: block;
  width: 30%;
  text-align: center;
  padding: 0.5em 1em;
  background: black;
  color: white;
  margin: 2em auto 0 auto;
  font-size: 1.5em;
  border-radius: 5px;
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
        <h1
          style={{
            marginTop: '2em',
          }}
        >
          To prostsze!
        </h1>
        <Break color="secondary" />
        <Paragraph
          style={{
            marginTop: '2em',
          }}
        >
          Nadal nie mówimy, że najławiejsze.
          <br />
          To twój wybór, ale cieszymy się, że możemy Ci go ułatwić.
        </Paragraph>
        <h2
          style={{
            margin: '2em 0 2em 0',
          }}
        >
          Dzięki nam szybko sprawdzisz:
        </h2>
        <FeaturesGrid>
          <Feature>
            <i className="material-icons">info</i>
            <span>Podstawowe informacje</span>
          </Feature>
          <Feature>
            <i className="material-icons">directions_bus</i>
            <span>Dojazd komunikacją</span>
          </Feature>
          <Feature>
            <i className="material-icons">place</i>
            <span>Lokalizacje</span>
          </Feature>
          <Feature>
            <i className="material-icons">access_time</i>
            <span>Zeszłoroczne profile</span>
          </Feature>
          <Feature>
            <i className="material-icons">bar_chart</i>
            <span>Progi punktowe</span>
          </Feature>
          <Feature>
            <i className="material-icons">calendar_today</i>
            <span>Dni otwarte</span>
          </Feature>
        </FeaturesGrid>
      </Container>
      <StripeWrapper>
        <Container>
          <DoubleGrid>
            <SourcesAnimation>
              <div className="sources">
                <i id="max-left" className="material-icons">
                  cloud
                </i>
                <i id="left" className="material-icons">
                  business
                </i>
                <i id="right" className="material-icons">
                  map
                </i>
                <i id="max-right" className="material-icons">
                  globe
                </i>
              </div>

              <div className="dest">
                <Logo
                  pathProps={{
                    fill: '#BA97FF',
                  }}
                />
              </div>
            </SourcesAnimation>
            <div>
              <h2>Jak to działa?</h2>
              <h3>
                Pobieramy dane z różnych źródeł, aby móc przedstawić Ci je w jak
                najlepszej postaci.
              </h3>
              <Paragraph>
                Korzystamy z danych Urzędu Miasta Warszawy, aby pobrać listę
                szkół oraz średnie liczby punktów, na bieżąco łączymy się z
                wieloma serwisami lokalizacyjnymi, aby dostarczyć Ci informacje
                o jak najlepszym połączeniu komunikacyjnym z Twoją wymarzoną
                szkołą. A to wszystko zebrane tylko w jednym miejscu...
              </Paragraph>
            </div>
          </DoubleGrid>
        </Container>
      </StripeWrapper>
      <Container>
        <DoubleGrid>
          <div>
            <h2
              style={{
                marginTop: '1em',
              }}
            >
              Nieaktualne dane?
            </h2>
            <Break />
            <h3>Nobody's perfect...</h3>
            <Paragraph>
              Przetwarzając ogromne ilości informacji może wkraść się do danych
              jakiś błąd. Jeżeli natkniesz się na niego, zgłoś to. Nasi
              moderatorzy zajmą się tym tak szybko, jak tylko będę mogli.
            </Paragraph>
          </div>
          <div></div>
        </DoubleGrid>
        <DoubleGrid>
          <div></div>
          <div>
            <h2
              style={{
                marginTop: '1em',
              }}
            >
              Społeczność
            </h2>
            <Break />
            <h3>Ten portal tworzy każdy z nas</h3>
            <Paragraph>
              Wybierasz liceum i robisz ogromny research, czy może masz już
              rekrutację za sobą i wiesz jak to działa? Podziel się swoimi
              spostrzeżeniami tutaj. Każdego ucznia ostatniej klasy podstawówki
              czeka to samo. Pomagajmy sobie nawzajem. WarsawLO to portal
              tworzony przez uczniów dla uczniów.
            </Paragraph>
          </div>
        </DoubleGrid>
        <CallToAction to={'/schools'}>
          Znajdź swoją szkołę już teraz
        </CallToAction>
      </Container>
    </Layout>
  );
};

export default LandingPage;
