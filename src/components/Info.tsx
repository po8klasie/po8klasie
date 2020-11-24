import React, { FC } from 'react';
import { Link } from '@reach/router';
import styled from '../styling/styled';

const InfoWrapper = styled.div`
  margin-top: 2em;
  .content {
    text-align: center;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 100%;
  }
`;

interface InfoProps {
  imageSrc: string;
}

const Info: FC<InfoProps> = ({ children, imageSrc }) => {
  return (
    <InfoWrapper>
      <div className="content">{children}</div>
      <div className="image-wrapper">
        <img src={imageSrc} alt="" />
      </div>
    </InfoWrapper>
  );
};

export const NotFoundInfo: FC = () => (
  <Info imageSrc={require('../assets/images/SchoolsPage/not-found.png')}>
    Ups! Brak szkół spełniających podane przez Ciebie wymagania :( <br />
    Zmień kryteria i szukaj jeszcze raz!
  </Info>
);

export const ErrorInfo: FC = () => (
  <Info imageSrc={require('../assets/images/SchoolsPage/error.png')}>
    Ups! Wystąpił błąd! <br />
    Spróbuj jeszcze raz :)
  </Info>
);

export const NoFavouriteSchoolsInfo: FC = () => (
  <Info imageSrc={require('../assets/images/favouriteSchools.png')}>
    Nie masz jeszcze polubionych szkół.
    <br />
    <Link to="/schools">Przejdź do wyszukiwania</Link>, aby móc znaleźć swoją przyszłą szkołę!
  </Info>
);
