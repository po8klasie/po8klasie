import React, { FC } from 'react';
import Container from './Container';
import styled from '../styling/styled';
import { Link } from '@reach/router';

const DataInfo = styled.div``;
const FooterGrid = styled.div`
  margin-top: 10vh;
  padding: 2em 0;
  font-size: 1em;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 4em;
  color: #707070;
  position: relative;
  .sitemap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2em;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 110%;
    transform: translateX(-50%);
    height: 1px;
    background: black;
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
  }
  .info-col {
    p {
      line-height: 1.5em;
      margin-top: 0;
      text-align: justify;
    }
    .logos-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 4em;
      margin-top: 2em;
    }
  }
`;
const Footer: FC = props => (
  <Container>
    <FooterGrid>
      <div>
        <DataInfo>
          Dokładamy wszelkich starań, aby dane były aktualne, ale nie ponosimy
          odpwiedzialności za ich prawidłowość.
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
              <Link to="/for-developers">Dla developerów / API</Link>
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
          WarsawLO to open-source'owy projekt civic tech tworzony przez
          wolonatariuszy we współpracy z programem Koduj Dla Polski Fundacji
          ePaństwo
        </p>
        <div className="logos-wrapper">
          <img
            src={require('../assets/images/epf.png')}
            alt={'Logo Fundacji ePaństwo'}
          />
          <img
            src={require('../assets/images/kdp-logo.png')}
            alt={'Logo Koduj dla Polski'}
          />
        </div>
      </div>
    </FooterGrid>
  </Container>
);

export default Footer;
