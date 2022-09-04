import { LatLngTuple } from 'leaflet';
import { ISchoolSearchData } from '../types';
import { TileLayerProps } from 'react-leaflet';
import { publicRuntimeConfig } from '../runtimeConfig';

export const parseCoords = (school: ISchoolSearchData): LatLngTuple => [
  parseFloat(`${school.latitude}`),
  parseFloat(`${school.longitude}`),
];

const { MAPBOX_ACCESS_TOKEN } = publicRuntimeConfig;

export const mapBoxTileLayerProps: TileLayerProps = {
  url: `https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`,
  tileSize: 512,
  zoomOffset: -1,
};

export const osmTileLayerProps: TileLayerProps = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
};

export const tileLayerProps = publicRuntimeConfig.MAPBOX_ACCESS_TOKEN
  ? mapBoxTileLayerProps
  : osmTileLayerProps;
