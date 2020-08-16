import React, { FC } from 'react';
import styled from '../../../styling/styled';

const SearchInfoWrapper = styled.div`
  margin-top: 2em;
  .content {
    text-align: center;
  }
  .image-wrapper {
    display: flex;
    justify-content: center;
  }
`;

const SearchInfo: FC<any> = ({ children, imageSrc }) => {
  return (
    <SearchInfoWrapper>
      <div className="content">{children}</div>
      <div className="image-wrapper">
        <img src={imageSrc} alt="" />
      </div>
    </SearchInfoWrapper>
  );
};

export const SearchNotFoundInfo = () => (
  <SearchInfo
    imageSrc={require('../../../assets/images/SchoolsPage/not-found.png')}
  >
    Ups! Brak szkół spełniających podane przez Ciebie wymagania :( <br />
    Zmień kryteria i szukaj jeszcze raz!
  </SearchInfo>
);

export const SearchErrorInfo = () => (
  <SearchInfo
    imageSrc={require('../../../assets/images/SchoolsPage/error.png')}
  >
    Ups! Wystąpił błąd! <br />
    Spróbuj jeszcze raz :)
  </SearchInfo>
);
