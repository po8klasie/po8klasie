import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import PageTitle from '../components/PageTitle';
import H2 from '../components/H2';
import DoubleGrid from '../components/DoubleGrid';
import LandingMainGrid from '../components/LandingMainGrid';
import Feature from '../components/Feature';
import FeatureTitle from '../components/FeatureTitle';
import FeaturesGrid from '../components/FeaturesGrid';
import CallToActionButton from '../components/CallToActionButton';
import CallToActionContainer from '../components/CallToActionContainer';
import {
  LandingPageSectionOne,
  LandingPageSectionTwo,
  LandingPageSectionThree,
} from '../components/LandingPageSections';
import LandingPageImage from '../components/LandingPageImage';
import chooseWithUsImg from '../assets/images/landingPage/choose_with_us.png';
import communityImg from '../assets/images/landingPage/community.png';
import dataImg from '../assets/images/landingPage/data.png';
import howItWorksImg from '../assets/images/landingPage/how_it_works.png';
import infoImg from '../assets/images/landingPage/info.png';
import locationImg from '../assets/images/landingPage/location.png';
import profilesImg from '../assets/images/landingPage/profiles.png';
import rankingImg from '../assets/images/landingPage/ranking.png';
import useBasicPageViewTracker from '../hooks/useBasicPageViewTracker';
import SEO from '../components/SEO';

const pageTitle = 'Home';

const LandingPage: FC<RouteComponentProps> = () => {
  useBasicPageViewTracker();
  return (
    <Layout>
      <SEO title={pageTitle} />
      <Container>
        <LandingMainGrid>
          <div>
            <PageTitle>Wybierz z nami swoją drogę!</PageTitle>
            <Paragraph>
              Nie wiesz którą szkołę wybrać? Rekrutacja do szkół średnich to poważna sprawa. W tym
              roku wybór będzie znacznie prostszy. Znajdź szkołę swoich marzeń już za trzecim
              kliknięciem!
            </Paragraph>
            <CallToActionButton to="/schools">Przeglądaj szkoły</CallToActionButton>
          </div>
          <LandingPageImage bgImage={chooseWithUsImg} position="right" />
        </LandingMainGrid>

        <H2>Dzięki nam szybko sprawdzisz</H2>
        <FeaturesGrid>
          <Feature>
            <img src={infoImg} alt="litera i - symbol informacji" />
            <FeatureTitle>podstawowe informacje</FeatureTitle>
          </Feature>
          <Feature>
            <img src={rankingImg} alt="gwiazdki - oznaczenie opinii" />
            <FeatureTitle>opinie</FeatureTitle>
          </Feature>
          <Feature>
            <img src={locationImg} alt="znacznik lokalizacji" />
            <FeatureTitle>lokalizacje</FeatureTitle>
          </Feature>
          <Feature>
            <img src={profilesImg} alt="książki - symbol profili" />
            <FeatureTitle>profile klas</FeatureTitle>
          </Feature>
        </FeaturesGrid>

        <LandingPageSectionOne>
          <DoubleGrid>
            <H2>Jak to działa?</H2>
            <Paragraph>
              Pobieramy dane z różnych źródeł, aby móc przedstawić Ci je w jak najlepszej postaci.
              <br />
              Korzystamy z danych Urzędu Miasta Warszawy, aby pobrać listę szkół oraz średnie liczby
              punktów. Na bieżąco łączymy się z wieloma serwisami lokalizacyjnymi, aby dostarczyć Ci
              informacje o jak najlepszym połączeniu komunikacyjnym z Twoją wymarzoną szkołą. A to
              wszystko zebrane tylko w jednym miejscu...
            </Paragraph>

            <LandingPageImage bgImage={howItWorksImg} position="right" />
          </DoubleGrid>
        </LandingPageSectionOne>

        <LandingPageSectionTwo>
          <DoubleGrid reversed>
            <H2 textAlign="right">Nieaktualne dane?</H2>
            <Paragraph textAlign="right">
              Nobody&apos;s perfect...
              <br />
              Przetwarzając ogromne ilości informacji może wkraść się do danych jakiś błąd. Jeżeli
              natkniesz się na niego, zgłoś to. Zajmiemy się tym tak szybko, jak tylko będziemy
              mogli.
            </Paragraph>
            <LandingPageImage bgImage={dataImg} position="left" />
          </DoubleGrid>
        </LandingPageSectionTwo>

        <LandingPageSectionThree>
          <DoubleGrid>
            <H2>Społeczność</H2>
            <Paragraph>
              Ten portal tworzy każdy z nas!
              <br />
              Wybierasz liceum i robisz ogromny research, czy może masz już rekrutację za sobą i
              wiesz jak to działa? Podziel się swoimi spostrzeżeniami tutaj. Każdego ucznia
              ostatniej klasy podstawówki czeka to samo. Pomagajmy sobie nawzajem.
            </Paragraph>
            <LandingPageImage bgImage={communityImg} position="right" />
          </DoubleGrid>
        </LandingPageSectionThree>

        <CallToActionContainer>
          <CallToActionButton to="/schools">Znajdź swoją szkołę już teraz</CallToActionButton>
        </CallToActionContainer>
      </Container>
    </Layout>
  );
};

export default LandingPage;
