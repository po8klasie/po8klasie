import React, { FC } from 'react';
import styled from '../styling/styled';
import fullHeart from '../assets/icons/heart_full.png';
import emptyHeart from '../assets/icons/heart.png';

const StyledButton = styled.button<AddRemoveFavouriteProps>`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  font-family: inherit;
  font-size: 1.125em;
  display: flex;
  align-items: center;
  margin-top: ${(props: AddRemoveFavouriteProps) => (props.isSmallMargin ? '12px' : '2em')};
  cursor: pointer;
  & img {
    margin-right: 8px;
  }
`;

interface AddRemoveFavouriteProps {
  // isFavourite is optional for the sake of not providing unnecessary prop to StyledButton
  isFavourite?: boolean;
  onClick: () => void;
  isSmallMargin?: boolean;
}

const AddRemoveFavourite: FC<AddRemoveFavouriteProps> = ({
  isFavourite,
  onClick,
  isSmallMargin,
}) => {
  return (
    <StyledButton isSmallMargin={isSmallMargin} onClick={onClick}>
      {isFavourite ? (
        <>
          <img src={fullHeart} alt="ikona wypełnione serce" />
          Dodano do ulubionych
        </>
      ) : (
        <>
          <img src={emptyHeart} alt="ikona puste serce" />
          Dodaj do ulubionych
        </>
      )}
    </StyledButton>
  );
};

export default AddRemoveFavourite;
