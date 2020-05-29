import React, { FC, useEffect, useRef, useState } from 'react';
import { SearchViewProps } from '../../data/searchViews';
import Map from '../Map';
import L, { LatLngExpression } from 'leaflet';
import styled from '../../styling/styled';
import { keyframes } from '@emotion/core';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import { School } from '../../types';
import {
  getSchoolMarker,
  highSchoolMarkerImage,
  specialSchoolMarkerImage,
  technicalSchoolMarkerImage,
  vocationalSchoolMarkerImage,
} from '../../utils/map';
import Container from '../Container';
import { Link } from '@reach/router';

const loaderAnimation = keyframes`
    0%, 100% {
        background: rgba(0,0,0,0.7);
    }
    50%{
        background: rgba(0,0,0,0.6);
    }
`;

const MapWrapper = styled.div<{ loading: boolean }>`
  position: relative;
  height: 60vh;
  margin-top: 2em;

  &::after {
    content: 'Loading';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    animation: ${loaderAnimation} 2s infinite;
    visibility: ${props => (props.loading ? 'visible' : 'hidden')};
    opacity: ${props => (props.loading ? '1' : '0')};
    transition: 0.2s all;
    z-index: 100;
  }
`;
const MarkerKey = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    margin: 0 10px;
    
    img {
      width 30.5px;
      margin-right: 1em;
    }
    
    @media(max-width: 900px) {
      margin: 20px 10px;
    }
  }
  @media(max-width: 900px) {
     display: block;
  }
`;
const PopupLink = styled(Link)`
  color: black !important;
  text-decoration: underline;
  text-align: center;
  font-family: 'Open Sans';
  display: block;
`;
const MapSearchView: FC = () => {
  const [isLoading, setLoading] = useState(true);
  const { isFetching, schools } = useSelector((state: any) => ({
    isFetching: state.schools.fetchingData.isFetching,
    schools: state.schools.results.flat(),
  }));

  const markers = useRef<any[]>([]);
  const map = useRef<any>(null);

  const handleConfig = (_map: any) => {
    _map.setView([52.237049, 21.017532], 15);
    map.current = _map;
  };
  useEffect(() => {
    console.log('changed schools', schools);
    setLoading(true);
    if (!map.current || isFetching) return;

    markers.current.forEach(m => {
      map.current.removeLayer(m);
    });

    schools.map((school: School) => {
      console.log(school.school_type);
      if (
        !school.address ||
        !school.address.longitude ||
        !school.address.latitude
      )
        return;

      const coords: LatLngExpression = [
        school.address.longitude,
        school.address.latitude,
      ];
      const popupEl = document.createElement('span');
      render(
        <PopupLink to={`/school/${school.id}`}>{school.school_name}</PopupLink>,
        popupEl,
      );

      markers.current.push(
        L.marker(coords, {
          icon: getSchoolMarker(school.school_type),
        })
          .addTo(map.current)
          .bindPopup(popupEl),
      );
    });
    setLoading(false);
  }, [schools]);

  return (
    <>
      <Container>
        <MarkerKey>
          {[
            ['liceum ogólnokształcące', highSchoolMarkerImage],
            ['technikum', technicalSchoolMarkerImage],
            ['szkoła branżowa', vocationalSchoolMarkerImage],
            [
              'szkoła specjalna przyspasabiająca do zawodu',
              specialSchoolMarkerImage,
            ],
          ].map(([name, imageUrl]) => (
            <div key={name}>
              <img src={imageUrl} alt="" />
              <span>{name}</span>
            </div>
          ))}
        </MarkerKey>
      </Container>
      <MapWrapper loading={isLoading}>
        <Map onConfig={handleConfig} />
      </MapWrapper>
    </>
  );
};

export default MapSearchView;
