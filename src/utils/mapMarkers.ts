import L from 'leaflet';
import markerIcon from '../assets/app/marker.png';

const commonMarkerOptions: {
  iconSize: [number, number];
  iconAnchor: [number, number];
  popupAnchor: [number, number];
} = {
  iconSize: [30.5, 40.7],
  iconAnchor: [30.5 / 2, 40.7], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -43], // point from which the popup should open relative to the iconAnchor
};

const createMarker = (iconUrl: string) =>
  L.icon({
    iconUrl,
    ...commonMarkerOptions,
  });

export const markerImage = markerIcon;

export const marker = createMarker(markerImage);
