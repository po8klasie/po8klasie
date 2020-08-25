import React, { FC } from 'react';
import { LatLngExpression } from 'leaflet';
import {getSchoolMarker} from '../../../utils/mapMarkers';
import styled from '../../../styling/styled';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import {doesSchoolHaveCoords, getSchoolCoords} from "../../../utils/map";

const MapWrapper = styled.div`
  width: 100%;
  border: none;
  height: 40vh;
  margin-top: 2em;

  .leaflet-container {
    height: 100%;
  }
  .tile-layer {
    filter: grayscale(1);
  }
`;

interface SchoolLocationMapProps {
  schoolName: string;
  schoolType: string;
  address: any;
}

const ZOOM = 15;

const SchoolLocationMap: FC<SchoolLocationMapProps> = ({
  schoolName,
  schoolType,
  address,
}) => {
  if (!schoolType || !doesSchoolHaveCoords({address})) return null;

  let coords = getSchoolCoords({address}) as LatLngExpression;

  return (
    <MapWrapper>
      <Map center={coords} zoom={ZOOM}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          className="tile-layer"
        />
        <Marker position={coords} icon={getSchoolMarker(schoolType)}>
          <Popup>{schoolName}</Popup>
        </Marker>
      </Map>
    </MapWrapper>
  );
};

export default SchoolLocationMap;
