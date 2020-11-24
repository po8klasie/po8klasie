import React, { FC } from 'react';
import styled from '../styling/styled';
import { Link } from '@reach/router';
import Container from './Container';

const DataInfo = styled.p`
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 10vh;
  padding: 2em 0;
  font-size: 1em;
  color: #707070;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 75%;
    transform: translateX(-50%);
    height: 1px;
    background: black;
    @media (max-width: 780px) {
      width: 100%;
    }
  }
`;
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 4em;
  .sitemap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2em;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
  ul {
    padding-inline-start: 0;
    li {
      display: block;
      margin: 1em 0;
    }
    a {
      color: inherit;
      font-weight: normal;
      text-decoration: underline;
    }
    @media (max-width: 650px) {
      margin: 0;
      text-align: center;
    }
  }
  .info-col {
    p {
      line-height: 1.5em;
      margin-top: 0;
      text-align: center;

      @media (min-width: 1001px) {
        text-align: left;
      }
    }
    }
    .logos-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4em;
      margin-top: 2em;

      img {
        width: 100%;
      }
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
const Footer: FC = () => (
  <FooterWrapper>
    <Container>
      <FooterGrid>
        <div>
          <DataInfo>
            Dokładamy wszelkich starań, aby dane były aktualne, ale nie ponosimy odpowiedzialności
            za ich prawidłowość.
          </DataInfo>
          <div className="sitemap">
            <ul>
              <li>
                <Link to="/">Strona główna</Link>
              </li>
              <li>
                <Link to="/schools">Wyszukiwarka szkół</Link>
              </li>
              <li>
                <Link to="/calculator">Kalkulator punktów</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/about-data">O naszych danych</Link>
              </li>
              <li>
                <Link to="/get-involved">Pomóż nam!</Link>
              </li>
              <li>
                <Link to="/for-developers">Dla deweloperów</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/privacy-policy">Polityka prywatności</Link>
              </li>
              <li>
                <Link to="/privacy-settings">Ustawienia prywatności</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="info-col">
          <p>
            WarsawLO to open-source'owy projekt civic tech tworzony przez wolonatariuszy we
            współpracy z programem Koduj Dla Polski Fundacji ePaństwo.
          </p>
          <div className="logos-wrapper">
            <a href="https://epf.org.pl" rel="noopener noreferrer" target="_blank">
              <img src={require('../assets/images/epf.png')} alt={'Logo Fundacji ePaństwo'} />
            </a>
            <a href="https://kodujdlapolski.pl" rel="noopener noreferrer" target="_blank">
              <img src={require('../assets/images/kdp-logo.png')} alt={'Logo Koduj dla Polski'} />
            </a>
          </div>
        </div>
      </FooterGrid>
    </Container>
  </FooterWrapper>
);

export default Footer;
