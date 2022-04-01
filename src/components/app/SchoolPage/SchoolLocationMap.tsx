import React, { FC } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { mapBoxTileLayerProps } from "../../../utils/map";
import { marker } from "../../../utils/mapMarkers";

interface SchoolLocationMapProps {
  position: LatLngExpression;
}

const SchoolLocationMap: FC<SchoolLocationMapProps> = ({ position }) => (
  <MapContainer center={position} zoom={13} className="w-full h-full rounded">
    <TileLayer {...mapBoxTileLayerProps} />
    <Marker position={position} icon={marker} />
  </MapContainer>
);

export default SchoolLocationMap;
