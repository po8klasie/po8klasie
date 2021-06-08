import { LatLngExpression } from 'leaflet';
import { gql } from '@apollo/client';
import { ISchoolCoordsFragment } from '../types/graphql';

export const doesSchoolHaveCoords = (schoolPicked: ISchoolCoordsFragment): boolean => {
  return Boolean(
    schoolPicked &&
      schoolPicked.address &&
      schoolPicked.address.latitude &&
      schoolPicked.address.longitude,
  );
};

export const getSchoolCoords = (schoolPicked: ISchoolCoordsFragment): LatLngExpression | null => {
  if (!doesSchoolHaveCoords(schoolPicked)) return null;

  return {
    lat: schoolPicked.address.latitude as number,
    lng: schoolPicked.address.longitude as number,
  };
};

export const SCHOOL_COORDS_FRAGMENT = gql`
  fragment SchoolCoords on SchoolNode {
    address {
      latitude
      longitude
    }
  }
`;
