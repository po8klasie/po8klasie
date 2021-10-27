import React, { createElement, FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { FaGithub, FaGlobe, FaLinkedinIn } from 'react-icons/all';
import { IconType } from 'react-icons';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import maintainers, { Maintainer, pastMaintainers } from '../../data/maintainers';
import styled from '../../styling/styled';
import Breadcrumbs from '../../components/Breadcrumbs';
import H2 from '../../components/H2';
import Paragraph from '../../components/Paragraph';
import SEO from '../../components/SEO';
import useBasicPageViewTracker from '../../hooks/useBasicPageViewTracker';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const HelpUsSection = styled.div`
  margin-top: 3rem;
  padding: 3rem 0;
  background: #f9f9f9;

  h2 {
    margin-top: 0;
  }
`;

const HelpUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const RolesList = styled.ul`
  display: block;
  font-weight: bold;
  margin: 0;
  padding: 0;
  li {
    display: block;
    font-size: 1.125em;
    line-height: 1.45em;
    color: ${(props) => props.theme.colors.text};
  }
`;

const MaintainerCardInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .image-wrapper {
    position: relative;
    width: 100%;

    &:after {
      content: '';
      display: block;
      padding-bottom: 7rem;
    }
  }
  h3 {
    margin-bottom: 0.5rem;
    word-break: break-word;
  }
  h4 {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: normal;
    margin: 0 0 1rem 0;
  }
  .icons {
    a {
      color: inherit;
      margin-right: 1rem;
    }
  }
`;

const CardImage = styled.img`
  border-radius: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 7rem;
  max-height: 7rem;
  object-fit: cover;
  object-position: center center;
`;

const ContributorsInfo = styled.details`
  summary {
    font-weight: bold;
    margin-top: 3rem;
    cursor: pointer;
    user-select: none;

    span {
      display: inline-block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  ul {
    margin-top: 0.7rem;
  }
  li {
    padding: 0.3rem 0;
  }
`;

const icons: Record<keyof Maintainer['links'], IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  website: FaGlobe,
};

interface MaintainerCardProps {
  maintainer: Maintainer;
}

type MaintainerLinks = [
  keyof Maintainer['links'],
  Maintainer['links'][keyof Maintainer['links']],
][];

const MaintainerCard: FC<MaintainerCardProps> = ({ maintainer }) => {
  return (
    <MaintainerCardInnerWrapper>
      <div>
        <div className="image-wrapper">
          <CardImage src={maintainer.image} />
        </div>

        <h3>{maintainer.name}</h3>
        <h4>{maintainer.role}</h4>
      </div>
      <div className="icons">
        {(Object.entries(maintainer.links) as MaintainerLinks).map(([key, link]) => (
          <a href={link} target="_blank" rel="noreferrer noopener" key={key}>
            {createElement(icons[key])}
          </a>
        ))}
      </div>
    </MaintainerCardInnerWrapper>
  );
};

const pageTitle = 'O nas';

const AboutPage: FC<RouteComponentProps> = () => {
  useBasicPageViewTracker();
  return (
    <Layout noFooterMargin>
      <SEO title={pageTitle} />
      <Container>
        <Breadcrumbs steps={[[pageTitle]]} />
        <PageTitle>{pageTitle}</PageTitle>
        <Paragraph>
          po8klasie to przewodnik ucznia, który pomaga mu podczas rekrutacji do szkół średnich.
          Tworzymy aplikację, która będzie wspierać przyszłych uczniów szkół średnich w wyborze
          dalszej ścieżki edukacji. To baza warszawskich szkół ponadpodstawowych z możliwością
          filtrowania wg różnych kryteriów. Chcemy pokazać, że{' '}
          <strong>wybór szkoły nie powinien ograniczać się tylko do kryterium punktowego</strong>,
          jak ma to miejsce w komercyjnych rankingach. Projekt został udostępniony na zasadzie
          open-source, co pozwala innym na czynną partycypację w rozwoju aplikacji. Poznaj zespół
          tworzący to narzędzie!
        </Paragraph>
        <br />
        <H2>Nasz zespół</H2>
        <Grid>
          {maintainers.map((maintainer) => (
            <MaintainerCard maintainer={maintainer} key={maintainer.name} />
          ))}
        </Grid>
        <H2>Współpracowali z nami</H2>
        <Grid>
          {pastMaintainers.map((maintainer) => (
            <MaintainerCard maintainer={maintainer} key={maintainer.name} />
          ))}
        </Grid>
        <ContributorsInfo>
          <summary>
            i wielu innych...
            <span>Zobacz wszystkich kontrybutorów</span>
          </summary>
          <div>
            <ul>
              <li>
                Wejdź na <a href="https://github.com/po8klasie">profil po8klasie na GitHubie</a>
              </li>
              <li>Wybierz repozytorium, które Cię interesuje</li>
              <li>Sprawdź sekcję &quot;Contributors&quot; w panelu po prawej</li>
            </ul>
          </div>
        </ContributorsInfo>
      </Container>
      <HelpUsSection>
        <Container>
          <H2>Chcesz pomóc?</H2>
          <HelpUsGrid>
            <Paragraph>
              po8klasie to projekt open-source. Cały czas szukamy osób, które chcą do nas dołączyć.
              Jeśli swoimi umiejętnościami chcesz wesprzeć naszą inicjatywę, napisz na adres{' '}
              <a href="mailto:info@po8klasie.pl">info@po8klasie.pl</a>. Zróbmy razem coś dobrego!
            </Paragraph>
            <div>
              <Paragraph>Obecnie szukamy:</Paragraph>
              <RolesList>
                <li>Back-end developer</li>
                <li>Social media specialist</li>
              </RolesList>
              <br />
              <Paragraph>
                Jeśli żadna z tych ról nie pasuje do Twoich umiejętności, a chcesz do nas dołączyć,
                napisz do nas i tak! Razem możemy więcej!
              </Paragraph>
            </div>
          </HelpUsGrid>
        </Container>
      </HelpUsSection>
    </Layout>
  );
};

export default AboutPage;
