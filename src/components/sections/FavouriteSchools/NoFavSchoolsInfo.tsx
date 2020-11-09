import { Link } from '@reach/router';
import React from 'react';
import styled from '../../../styling/styled';

const Wrapper = styled.div`
  p {
    text-align: center;
  }
  .image {
    background-image: url(${require('../../../assets/images/ulubione.png')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    min-height: 300px;
  }
`;

const NoFavSchoolsInfo = () => {
  return (
    <Wrapper>
      <p>
        Nie masz jeszcze polubionych szkół.
        <br />
        <Link to="/schools">Przejdź do wyszukiwania</Link>, aby móc znaleźć
        swoją przyszłą szkołę!
      </p>
      <div className="image" />
    </Wrapper>
  );
};

export default NoFavSchoolsInfo;
