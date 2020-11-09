import React, { FC } from 'react';
import { css } from '@emotion/core';
import styled from '../../../styling/styled';
import { createPlaceholderStyles } from '../../../utils/loading';
import AddRemoveFavourite from './AddRemoveFavourite';

const placeholderStyle = css`
  ${createPlaceholderStyles()}
  height: 1.5em;
  width: 20em;
`;

const HeaderWrapper = styled.div<{ isLoading: boolean }>`
  margin-top: 3vh;
  span {
    text-transform: uppercase;
  }
  h1 {
    font-size: 3em;
    margin: 20px 0;
    @media (max-width: 1210px) {
      font-size: 2em;
    }
    ${(props) => props.isLoading && placeholderStyle}
  }
  span {
    ${(props) => props.isLoading && placeholderStyle}
  }
`;

interface SchoolHeaderProps {
  isPublic: boolean;
  schoolName: string;
  district: string;
  description: string;
  isLoading: boolean;
  isFavourite: boolean;
  handleFavourite: () => void;
}

const SchoolHeader: FC<SchoolHeaderProps> = ({
  isPublic,
  schoolName,
  district,
  description,
  isLoading,
  isFavourite,
  handleFavourite,
}) => {
  return (
    <HeaderWrapper isLoading={isLoading}>
      <span className="public">
        {isPublic ? 'szkoła publiczna' : 'szkoła niepubliczna'}
      </span>
      <h1>{!isLoading && schoolName}</h1>
      <span className="district">{!isLoading && district}</span>
      <p>
        [Opis szkoły: np.] Publiczne liceum ogólnokształcące w Warszawie
        założone w 1874. Jest najstarszym warszawskim liceum.
      </p>
      <AddRemoveFavourite isFavourite={isFavourite} onClick={handleFavourite} />
    </HeaderWrapper>
  );
};

export default SchoolHeader;
