import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Paragraph from "../components/Paragraph";
import H1 from "../components/H1";
import H2 from "../components/H2";
import DoubleGrid from "../components/DoubleGrid";
import Feature from "../components/Feature";
import FeatureTitle from "../components/FeatureTitle";
import FeaturesGrid from "../components/FeaturesGrid";
import CallToActionButton from "../components/CallToActionButton";
import CenterContainer from "../components/CenterContainer";
import { LandingPageSectionOne, LandingPageSectionTwo, LandingPageSectionThree } from "../components/LandingPageSections";
import LandingPageImage from "../components/LandingPageImage";

interface LandingPageProps extends RouteComponentProps {}

const LandingPage: FC<LandingPageProps> = props => {
  return (
    <Layout>
      <Container>
        <DoubleGrid>
          <div>
            <H1>Wybierz z nami swoją drogę!</H1>
            <Paragraph>
              Nie wiesz którą szkołę wybrać? Rekrutacja do szkół średnich to poważna sprawa. W tym roku wybór będzie znacznie prostszy. Znajdź szkołę swoich marzeń już za trzecim kliknięciem!
            </Paragraph>
            <CallToActionButton to="/schools">Przeglądaj szkoły</CallToActionButton>
          </div>
          <LandingPageImage bgImage={require('../assets/images/landingPage/wybierz_z_nami.png')} position="right"/>
        </DoubleGrid>

        <H2>Dzięki nam szybko sprawdzisz</H2>
        <FeaturesGrid>
          <Feature>
            <img src={require('../assets/images/landingPage/info.png')} alt="litera i - symbol informacji" />
            <FeatureTitle>podstawowe informacje</FeatureTitle>
          </Feature>
          <Feature>
            <img src={require('../assets/images/landingPage/ranking.png')} alt="gwiazdki - oznaczenie rankingu" />
            <FeatureTitle>miejsce w rankingu</FeatureTitle>
          </Feature>
          <Feature>
            <img src={require('../assets/images/landingPage/lokalizacja.png')} alt="znacznik lokalizacji" />
            <FeatureTitle>lokalizacja</FeatureTitle>
          </Feature>
          <Feature>
            <img src={require('../assets/images/landingPage/profile.png')} alt="książki - symbol profili" />
            <FeatureTitle>profile klas</FeatureTitle>
          </Feature>
        </FeaturesGrid>

        <LandingPageSectionOne>
          <DoubleGrid>
            <div>
              <H2>Jak to działa?</H2>
              <Paragraph>Pobieramy dane z różnych źródeł, aby móc przedstawić Ci je w jak najlepszej postaci.</Paragraph>
              <Paragraph>
                Korzystamy z danych Urzędu Miasta Warszawy, aby pobrać listę szkół oraz średnie liczby punktów. Na bieżąco łączymy się z wieloma serwisami lokalizacyjnymi,
                aby dostarczyć Ci informacje o jak najlepszym połączeniu komunikacyjnym z Twoją wymarzoną szkołą. A to wszystko zebrane tylko w jednym miejscu...
              </Paragraph>
            </div>
            <LandingPageImage bgImage={require('../assets/images/landingPage/jak_dziala.png')} position="right"/>
          </DoubleGrid>
        </LandingPageSectionOne>

        <LandingPageSectionTwo>
          <DoubleGrid>
            <LandingPageImage bgImage={require('../assets/images/landingPage/dane.png')} position="left"/>
            <div>
              <H2 textAlign="right">Nieaktualne dane?</H2>
              <Paragraph textAlign="right">Nobody's perfect...</Paragraph>
              <Paragraph textAlign="right">
                Przetwarzając ogromne ilości informacji może wkraść się do danych jakiś błąd. Jeżeli natkniesz się na niego, zgłoś to. Nasi moderatorzy zajmą się tym tak szybko, jak tylko będę mogli.
              </Paragraph>
            </div>
          </DoubleGrid>
        </LandingPageSectionTwo>

        <LandingPageSectionThree>
          <DoubleGrid>
            <div>
              <H2>Społeczność</H2>
              <Paragraph>Ten portal tworzy każdy z nas!</Paragraph>
              <Paragraph>
                Wybierasz liceum i robisz ogromny research, czy może masz już rekrutację za sobą i wiesz jak to działa? Podziel się swoimi spostrzeżeniami tutaj. Każdego ucznia ostatniej klasy podstawówki czeka to samo. Pomagajmy sobie nawzajem. WarsawLO to portal tworzony przez uczniów dla uczniów.
              </Paragraph>
            </div>
            <LandingPageImage bgImage={require('../assets/images/landingPage/spolecznosc.png')} position="right"/>
          </DoubleGrid>
        </LandingPageSectionThree>

        <CenterContainer>
          <CallToActionButton to={"/schools"}>
            Znajdź swoją szkołę już teraz
          </CallToActionButton>
        </CenterContainer>

      </Container>
    </Layout>
  );
};

export default LandingPage;
