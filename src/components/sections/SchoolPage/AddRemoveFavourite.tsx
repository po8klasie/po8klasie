import React, { FC } from 'react';
import styled from '../../../styling/styled';
import heart from '../../../assets/icons/heart.png';
import heart_full from '../../../assets/icons/heart_full.png';

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-family: inherit;
  font-size: 1.125em;
  display: flex;
  align-items: center;
  margin-top: 2em;
  cursor: pointer;
  & img {
    margin-right: 8px;
  }
`;

interface AddRemoveFavouriteProps {
  isFavourite: boolean;
  onClick: () => void;
}

const AddRemoveFavourite: FC<AddRemoveFavouriteProps> = ({ isFavourite, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {isFavourite ? (
        <>
          <img src={heart_full} alt="ikona_serce_puste" />
          Dodano do ulubionych
        </>
      ) : (
        <>
          <img src={heart} alt="ikona_serce_wypełnione" />
          Dodaj do ulubionych
        </>
      )}
    </StyledButton>
  );
};

export default AddRemoveFavourite;
