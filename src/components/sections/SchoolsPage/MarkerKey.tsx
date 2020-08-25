import React from 'react';
import styled from '../../../styling/styled';
import {
  highSchoolMarkerImage,
  specialSchoolMarkerImage,
  technicalSchoolMarkerImage,
  vocationalSchoolMarkerImage,
} from '../../../utils/mapMarkers';

const MarkerKeyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;

  div {
    display: flex;
    align-items: center;
    margin: 0 10px;

    &:first-of-type {
      margin-left: 10px;
    }

    img {
      width: 30.5px;
      margin-right: 1em;
    }

    @media (max-width: 900px) {
      margin: 20px 10px;
    }
  }
  @media (max-width: 900px) {
    display: block;
  }
`;

const MarkerKey = () => {
  return (
    <MarkerKeyWrapper>
      {[
        ['liceum ogólnokształcące', highSchoolMarkerImage],
        ['technikum', technicalSchoolMarkerImage],
        ['szkoła branżowa', vocationalSchoolMarkerImage],
        ['szkoła specjalna', specialSchoolMarkerImage],
      ].map(([name, imageUrl]) => (
        <div key={name}>
          <img src={imageUrl} alt="" />
          <span>{name}</span>
        </div>
      ))}
    </MarkerKeyWrapper>
  );
};

export default MarkerKey;
