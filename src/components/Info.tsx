import React, { FC } from 'react';
import { Link } from '@reach/router';
import styled from '../styling/styled';
import errorImg from '../assets/images/SchoolsPage/error.png';
import notFoundImg from '../assets/images/SchoolsPage/not-found.png';
import favouriteSchoolsImg from '../assets/images/favouriteSchools.png';

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
  <Info imageSrc={notFoundImg}>
    Ups! Brak szkół spełniających podane przez Ciebie wymagania :( <br />
    Zmień kryteria i szukaj jeszcze raz!
  </Info>
);

export const ErrorInfo: FC = () => (
  <Info imageSrc={errorImg}>
    Ups! Wystąpił błąd! <br />
    Spróbuj jeszcze raz :)
  </Info>
);

export const NoFavouriteSchoolsInfo: FC = () => (
  <Info imageSrc={favouriteSchoolsImg}>
    Nie masz jeszcze polubionych szkół.
    <br />
    <Link to="/schools">Przejdź do wyszukiwania</Link>, aby móc znaleźć swoją przyszłą szkołę!
  </Info>
);
