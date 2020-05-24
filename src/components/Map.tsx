import styled from "../styling/styled";
import React, {FC, forwardRef, HTMLProps, Ref, useEffect, useRef} from "react";
import L, {LatLngExpression} from "leaflet";

const MapWrapper = styled.div``;
const MapElement = styled.div`
  width: 100%;
  border: none;
  height: 60vh;
  // margin-top: 3em;
  filter: grayscale(1);
`;

interface MapProps {
    innerRef: Ref<HTMLDivElement>
    onConfig?: Function
}

const Map: FC<MapProps> = props => {
    const mapEl = useRef<HTMLDivElement>(null);
    const map = useRef<any>(null);

    useEffect(() => {
        map.current = L.map(mapEl.current as HTMLDivElement);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map.current);
        if(props.onConfig){
            props.onConfig(map.current);
        }
        // eslint-disable-next-line
    }, []);


    return (<MapWrapper ref={props.innerRef}>
        <MapElement ref={mapEl} />
    </MapWrapper>);
};

export default forwardRef<any, {onConfig?: Function}>((props, ref) => <Map {...props} innerRef={ref} />);
