import { School } from '../types';
import { LatLngExpression } from 'leaflet';

type AddressLike = { address: any };

export const doesSchoolHaveCoords = (school: School | AddressLike): boolean => {
  return school && school.address && school.address.latitude && school.address.longitude;
};

export const getSchoolCoords = (school: School | AddressLike): LatLngExpression | null => {
  if (!doesSchoolHaveCoords(school)) return null;

  return {
    lat: school.address.latitude,
    lng: school.address.longitude,
  };
};
