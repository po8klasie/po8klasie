import React, { useMemo, useState } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import QueryFilter from '../components/sections/SchoolsPage/QueryFilter';
import { useAllSchools } from '../api/schools';
import styled from '../styling/styled';
import DropdownFilters from '../components/sections/SchoolsPage/DropdownFilters';
import {
  deserializeFilters,
  deserializeQuery,
  serializeSearchData,
} from '../utils/search';
import { filters } from '../data/filters';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { getSchoolMarker } from '../utils/map';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { BsGrid, BsX } from 'react-icons/bs/index';
import SwitchViewLink from '../components/sections/SchoolsPage/SwitchViewLink';
import ClipLoader from 'react-spinners/ClipLoader';
import theme from '../styling/theme';
import MarkerKey from '../components/sections/SchoolsPage/MarkerKey';
import 'react-leaflet-fullscreen-control';
import { getPathWithPreservedParams } from '../utils/url';
import 'leaflet/dist/leaflet.css';
import { ErrorInfo, NotFoundInfo } from '../components/Info';
const QueryRow = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  & > *:first-of-type {
    margin-right: 20px;
    width: 100%;
    min-width: 210px;

    @media (max-width: 1100px) {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1100px) {
    display: block;
  }
`;

const TopContainer = styled(Container)`
  flex: 1 0 auto;
`;

const MapWrapper = styled.div`
  width: 100%;
  border: none;
  height: 100%;
  margin-top: 2em;
  position: relative;

  .leaflet-container {
    height: 100%;
  }
  .tile-layer {
    filter: grayscale(1);
  }
  .school-popup {
    h5 {
      font-size: 1.3em;
      margin: 0;
    }
    address {
      font-style: normal;
      font-size: 1em;
      margin: 1em 0;
    }
    .link {
      color: ${theme.colors.primary};
    }
  }
`;

const Overlay = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 0.2s all;
`;

const NotListedWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 10px;
  left: 50px;
  z-index: 700;
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 0.2s all;
`;
const NotListed = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  padding: 20px 30px;
  background: white;
  position: relative;
`;
const CloseNotListedIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  svg {
    width: 1.2em;
    height: 1.2em;
  }
`;

const DEFAULT_CENTER = [52.237049, 21.017532] as [number, number];
const DEFAULT_ZOOM = 15;

const SchoolsMapPage = (props: RouteComponentProps) => {
  const currUrl = new URL(window.location.href);
  const p = currUrl.searchParams;
  const [query, setQuery] = useState(deserializeQuery(p));
  const [dropdownFilters, setDropdownFilters] = useState(
    deserializeFilters(p, filters),
  );
  const [notListedCount, setNotListedCount] = useState(0);
  const [notListedVisible, setNotListedVisible] = useState(true);
  const searchData = {
    query,
    ...dropdownFilters,
  };
  const { data: schools, error } = useAllSchools(searchData);

  useDeepCompareEffect(() => {
    currUrl.search = serializeSearchData(searchData, 'search');
    window.history.replaceState(null, '', currUrl.toString());
  }, [searchData, currUrl]);

  const bounds = useMemo(() => {
    let b = [];
    setNotListedCount(0);
    setNotListedVisible(true);
    if (schools && schools.length > 0) {
      b = schools.reduce((prev, school) => {
        if (!school || !school.address || !school.address.latitude) {
          setNotListedCount((count) => count + 1);
          return prev;
        }

        return [
          ...prev,
          {
            lat: school.address.longitude,
            lng: school.address.latitude,
          },
        ];
      }, []);
    }
    if (b.length === 0) return undefined;
    return b;

    // eslint-disable-next-line
  }, [JSON.stringify(schools)]);

  const schoolsNotFound = !!(schools && schools.length === 0);
  const isLoading = !schools;

  const isOverlayActive = isLoading || schoolsNotFound;

  return (
    <Layout hideFooter={true} contentFlex={true}>
      <TopContainer>
        <PageTitle>Znajdź swoją wymarzoną szkołę</PageTitle>
        <SwitchViewLink label="Widok siatki" icon={BsGrid} viewPath={'grid'} />
        <QueryRow>
          <QueryFilter query={query} onQueryChange={setQuery} />
          <DropdownFilters
            filtersValues={dropdownFilters}
            onFiltersValuesChange={setDropdownFilters}
          />
        </QueryRow>
        <MarkerKey />
      </TopContainer>
      <MapWrapper>
        <Map
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          bounds={bounds}
          fullscreenControl
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            className="tile-layer"
          />
          {schools &&
            schools.map((school) => {
              if (
                !school.school_type ||
                !school.address ||
                !school.address.latitude
              )
                return null;

              let coords = {
                lat: school.address.longitude,
                lng: school.address.latitude,
              };

              return (
                <Marker
                  position={coords}
                  icon={getSchoolMarker(school.school_type)}
                  key={school.id}
                >
                  <Popup className="school-popup">
                    <h5>{school.school_name}</h5>
                    <address>
                      {school.address.postalcode} {school.address.city} <br />
                      {school.address.street} {school.address.building_nr}
                    </address>
                    <Link to={`/school/${school.id}`} className="link">
                      Więcej
                    </Link>
                  </Popup>
                </Marker>
              );
            })}
        </Map>
        <Overlay active={isOverlayActive}>
          {!error && schoolsNotFound && <NotFoundInfo />}
          {error && <ErrorInfo />}
          <ClipLoader
            size={150}
            color={theme.colors.primary}
            loading={!error && isLoading}
          />
        </Overlay>
        <NotListedWrapper active={notListedCount > 0 && notListedVisible}>
          <NotListed>
            Niestety, część szkół z naszej bazy ({notListedCount}) nie jest
            zaznaczona na mapie. <br />
            Aby wyświetlić wszystkie pozycje, przełącz na{' '}
            <Link to={getPathWithPreservedParams('/schools/grid')}>
              widok listy
            </Link>
            .
            <CloseNotListedIcon onClick={() => setNotListedVisible(false)}>
              <BsX />
            </CloseNotListedIcon>
          </NotListed>
        </NotListedWrapper>
      </MapWrapper>
    </Layout>
  );
};

export default SchoolsMapPage;
