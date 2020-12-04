import React, { FC } from 'react';
import styled from '../styling/styled';
import FullHeart from '../assets/icons/heart_full.png';
import EmptyHeart from '../assets/icons/heart.png';

const StyledButton = styled.button`
  border: none;
  outline: none;
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
          <img src={FullHeart} alt="ikona_serce_wypełnione" />
          Dodano do ulubionych
        </>
      ) : (
        <>
          <img src={EmptyHeart} alt="ikona_serce_puste" />
          Dodaj do ulubionych
        </>
      )}
    </StyledButton>
  );
};

export default AddRemoveFavourite;
