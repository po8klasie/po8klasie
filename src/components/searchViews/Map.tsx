import React, { FC, useEffect, useRef } from 'react';
import { SearchViewProps } from '../../data/searchViews';
import Map from '../Map';
import L, { LatLngExpression } from 'leaflet';
import styled from '../../styling/styled';
import { keyframes } from '@emotion/core';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import { School } from '../../types';

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
  }
`;

const MapSearchView: FC = () => {
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
    if (!map.current || isFetching) return;

    markers.current.forEach(m => {
      map.current.removeLayer(m);
    });

    schools.map((school: School) => {
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

      markers.current.push(
        L.marker(coords)
          .addTo(map.current)
          .bindPopup(
            `<a href="/school/${school.id}">${school.school_name}</a>`,
          ),
      );
    });
  }, [schools]);

  return (
    <MapWrapper loading={isFetching}>
      <Map onConfig={handleConfig} />
    </MapWrapper>
  );
};

export default MapSearchView;
