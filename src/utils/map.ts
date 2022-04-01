import { LatLngExpression, LatLngTuple } from 'leaflet';
import { ISchoolCoordsFragment } from '../types/graphql';
import { RailsApiSchool } from '../types';
import { TileLayerProps } from "react-leaflet";

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

export const parseCoords = (school: RailsApiSchool): LatLngTuple => [
  parseFloat(school.latitude),
  parseFloat(school.longitude),
];

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const mapBoxTileLayerProps: TileLayerProps = {
  url: `https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
  tileSize: 512,
  zoomOffset: -1,
};

// leaving this obj to allow quick switching between mapbox and osm
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const osmTileLayerProps: TileLayerProps = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};
