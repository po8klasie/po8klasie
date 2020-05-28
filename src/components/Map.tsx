import styled from '../styling/styled';
import React, {
  FC,
  forwardRef,
  HTMLProps,
  Ref,
  useEffect,
  useRef,
} from 'react';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12.5, 41], // the same for the shadow
  popupAnchor: [0, -43], // point from which the popup should open relative to the iconAnchor
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapWrapper = styled.div`
  width: 100%;
  border: none;
  height: 100%;
`;
const MapElement = styled.div`
  width: 100%;
  border: none;
  height: 100%;
  // margin-top: 3em;
  filter: grayscale(1);
`;

interface MapProps {
  innerRef: Ref<HTMLDivElement>;
  onConfig?: Function;
}

const Map: FC<MapProps> = props => {
  const mapEl = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    map.current = L.map(mapEl.current as HTMLDivElement);
    const defaultTileLayer = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      },
    );
    defaultTileLayer.addTo(map.current);
    if (props.onConfig) {
      props.onConfig(map.current, defaultTileLayer);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <MapWrapper ref={props.innerRef}>
      <MapElement ref={mapEl} />
    </MapWrapper>
  );
};

export default forwardRef<any, { onConfig?: Function }>((props, ref) => (
  <Map {...props} innerRef={ref} />
));
