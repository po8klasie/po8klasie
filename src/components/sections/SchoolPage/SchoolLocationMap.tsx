import React, {FC } from "react";
import {LatLngExpression} from "leaflet";
import {getSchoolMarker} from "../../../utils/map";
import styled from "../../../styling/styled";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";

const MapWrapper = styled.div`
  width: 100%;
  border: none;
  height: 40vh;
  margin-top: 2em;
  
  .leaflet-container {
    height: 100%;
  }
  .tile-layer {
    filter: grayscale(1);
  }
`;

interface SchoolLocationMapProps {
    schoolName: string
    schoolType: string
    address: any
}

const DEFAULT_CENTER = [52.237049, 21.017532] as [number, number];
const DEFAULT_ZOOM = 15;

const SchoolLocationMap: FC<SchoolLocationMapProps> = ({schoolName, schoolType, address}) => {

    if(!schoolType || !address || !address.latitude)
        return null;

    let coords: LatLngExpression = DEFAULT_CENTER;
    let zoom = DEFAULT_ZOOM;
    if(address && address.latitude){
        coords = {
            lat: address.longitude,
            lng: address.latitude
        }
        zoom = 15;
    }

    return (
        <MapWrapper>
            <Map center={coords} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    className="tile-layer"
                />
                <Marker position={coords} icon={getSchoolMarker(schoolType)}>
                    <Popup>{schoolName}</Popup>
                </Marker>
            </Map>
        </MapWrapper>
    )
};

export default SchoolLocationMap;