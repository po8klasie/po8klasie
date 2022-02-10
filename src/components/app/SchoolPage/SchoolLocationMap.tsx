import { FC } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface SchoolLocationMapProps {
  position: LatLng;
}

const SchoolLocationMap: FC<SchoolLocationMapProps> = ({ position }) => (
  <MapContainer center={position} zoom={13} className="w-full h-full rounded">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} />
  </MapContainer>
);

export default SchoolLocationMap;
