import React, {useState} from 'react';
import {Link, RouteComponentProps} from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import QueryFilter from "../components/sections/SchoolsPage/QueryFilter";
import {useAllSchools
} from "../api/schools";
import styled from "../styling/styled";
import DropdownFilters from "../components/sections/SchoolsPage/DropdownFilters";
import {
    deserializeFilters,
    deserializeQuery,
    serializeSearchData
} from "../utils/search";
import {filters} from "../data/filters";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {getSchoolMarker} from "../utils/map";
import useDeepCompareEffect from "use-deep-compare-effect";

const QueryRow = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  & > *:first-of-type {
    margin-right: 20px;
    width: 100%;
    min-width: 210px;

    @media(max-width: 1100px){
      margin-bottom: 10px;
    }
  }
  @media(max-width: 1100px){
    display: block;
  }
`;

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

const DEFAULT_CENTER = [52.237049, 21.017532] as [number, number];
const DEFAULT_ZOOM = 15;

const SchoolsMapPage = (props: RouteComponentProps) => {
    const currUrl = new URL(window.location.href);
    const p = currUrl.searchParams;
    const [query, setQuery] = useState(deserializeQuery(p));
    const [dropdownFilters, setDropdownFilters] = useState(deserializeFilters(p, filters));

    const searchData = {
        query,
        ...dropdownFilters,
    };
    const {data: schools} = useAllSchools(searchData);

    useDeepCompareEffect(() => {
        currUrl.search = serializeSearchData(searchData, 'search');
        window.history.replaceState(null, '', currUrl.toString());
    }, [searchData, currUrl])
    console.log(schools)
    return (
        <Layout>
            <Container>
                <PageTitle>Znajdź swoją wymarzoną szkołę</PageTitle>
                <QueryRow>
                    <QueryFilter query={query} onQueryChange={setQuery}/>
                    <DropdownFilters filtersValues={dropdownFilters} onFiltersValuesChange={setDropdownFilters}/>
                </QueryRow>
            </Container>
            <MapWrapper>
                <Map center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        className="tile-layer"
                    />
                    {
                        schools.map(school => {
                            if(!school.school_type || !school.address || !school.address.latitude)
                                return null;

                            let coords = {
                                    lat: school.address.longitude,
                                    lng: school.address.latitude
                                };

                            return (
                                <Marker position={coords} icon={getSchoolMarker(school.school_type)} key={school.id}>
                                    <Popup>
                                        <Link to={`/school/${school.id}`}>
                                            {school.school_name}
                                        </Link>
                                    </Popup>
                                </Marker>
                            )
                        })
                    }
                </Map>
            </MapWrapper>
        </Layout>
    );
};

export default SchoolsMapPage;
