import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const defaultMarker = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12.5, 41], // the same for the shadow
  popupAnchor: [0, -43], // point from which the popup should open relative to the iconAnchor
});

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

export const highSchoolMarkerImage = require('../assets/icons/markers/marker1.png');
export const highSchoolMarker = createMarker(highSchoolMarkerImage);

export const technicalSchoolMarkerImage = require('../assets/icons/markers/marker3.png');
export const technicalSchoolMarker = createMarker(technicalSchoolMarkerImage);

export const vocationalSchoolMarkerImage = require('../assets/icons/markers/marker2.png');
export const vocationalSchoolMarker = createMarker(vocationalSchoolMarkerImage);

export const specialSchoolMarkerImage = require('../assets/icons/markers/marker4.png');
export const specialSchoolMarker = createMarker(specialSchoolMarkerImage);

export const getSchoolMarker = (schoolType: string) => {
  switch (schoolType) {
    case 'liceum ogólnokształcące':
      return highSchoolMarker;
    case 'technikum':
      return technicalSchoolMarker;
    case 'szkoła branżowa I stopnia':
      return vocationalSchoolMarker;
    case 'szkoła specjalna przysposabiająca do pracy':
      return specialSchoolMarker;
    default:
      return defaultMarker;
  }
};
