import React, { FC } from 'react';
import Container from './Container';
import styled from '../styling/styled';
import { Link } from '@reach/router';

const FooterWrapper = styled.footer`
  background: black;
  color: white;
  margin-top: 10vh;
  padding: 1em 0 2em 0;
  font-size: 1.1em;
`;
const DataInfo = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2em;
  ul {
    padding-start: 0;
    li {
      display: block;
      margin: 1em 0;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .info-col {
    margin-top: 10px;
    p {
      line-height: 1.5em;
    }
    .logo-wrapper {
      display: flex;
      justify-content: center;
    }
  }
`;
const Footer: FC = props => (
  <FooterWrapper>
    <Container>
      <DataInfo>
        Dokładamy wszelkich starań, aby dane były aktualne, ale nie ponosimy
        odpwiedzialności za ich prawidłowość.
      </DataInfo>
      <FooterGrid>
        <ul>
          <li>
            <Link to="/search">Strona główna</Link>
          </li>
          <li>
            <Link to="/search">Wyszukiwarka szkół</Link>
          </li>
          <li>
            <Link to="/search">Kalkulator punktów</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/search">O naszych danych</Link>
          </li>
          <li>
            <Link to="/search">Pomóż nam!</Link>
          </li>
          <li>
            <Link to="/search">Dla developerów / API</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/search">Polityka prywatności</Link>
          </li>
          <li>
            <Link to="/search">Ustawienia prywatności</Link>
          </li>
        </ul>
        <div className="info-col">
          <p>
            WarsawLO to open-source'owy projekt civic tech tworzony przez
            wolonatariuszy we współpracy z programem Koduj Dla Polski Fundacji
            ePaństwo
          </p>
          <div className="logo-wrapper">
            <img
              src={require('../assets/images/kdp-logo.png')}
              alt={'Logo Koduj dla Polski'}
            />
          </div>
        </div>
      </FooterGrid>
    </Container>
  </FooterWrapper>
);

export default Footer;
