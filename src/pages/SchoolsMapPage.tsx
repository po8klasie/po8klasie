import React, { useMemo, useState, FC } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { BsGrid, BsX } from "react-icons/bs/index";
import ClipLoader from 'react-spinners/ClipLoader';
import { LatLngExpression } from 'leaflet';
import Layout from '../components/Layout';
import { useAllSchools } from "../api/schools";
import styled from '../styling/styled';
import { deserializeFilters, deserializeQuery, serializeSearchData } from '../utils/search';
import { filters as filtersDefinition } from "../data/filters";
import { getSchoolMarker } from '../utils/mapMarkers';
import { doesSchoolHaveCoords, getSchoolCoords } from '../utils/map';
import SwitchViewLink from '../components/sections/SchoolsPage/SwitchViewLink';
import theme from '../styling/theme';
import 'react-leaflet-fullscreen-control';
import getPathWithPreservedParams from '../utils/url';
import 'leaflet/dist/leaflet.css';
import { ErrorInfo, NotFoundInfo } from '../components/Info';
import SEO from '../components/SEO';
import useBasicPageViewTracker from "../hooks/useBasicPageViewTracker";
import Sidebar from "../components/sections/SchoolsPage/Sidebar/Sidebar";
import useFilters from "../hooks/useFilters";
import { convertFilterStateToObject } from "../utils/filters";

const SidebarWrapper = styled.div`
  width: 25vw;
  height: 100vh;
  max-width: 400px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const MapWrapper = styled.div`
  width: calc(100% - min(25vw, 400px));
  margin-left: min(25vw, 400px);
  border: none;
  height: 100%;
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

const SchoolsMapPage: FC<RouteComponentProps> = () => {
  useBasicPageViewTracker();
  const currUrl = new URL(window.location.href);
  const p = currUrl.searchParams;
  const [query, setQuery] = useState(deserializeQuery(p));
  const filters = useFilters(filtersDefinition, deserializeFilters(p, filtersDefinition));
  const [notListedCount, setNotListedCount] = useState(0);
  const [notListedVisible, setNotListedVisible] = useState(true);
  const searchData = {
    query,
    ...convertFilterStateToObject(filters.filtersState),
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
      b = schools.reduce((prev: any, school: any) => {
        if (!doesSchoolHaveCoords(school)) {
          setNotListedCount((count) => count + 1);
          return prev;
        }

        return [...prev, getSchoolCoords(school) as LatLngExpression];
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
    <Layout hideFooter wideNavbar noTopMargin contentFlex>
      <SEO title="Przeglądaj szkoły na mapie" />
      <SidebarWrapper>
        <Sidebar
          filters={filters}
          query={query}
          onQueryChange={setQuery}
          switchViewLinkElement={
            <SwitchViewLink label="Widok listy" icon={BsGrid} viewPath="grid" />
          }
        />
      </SidebarWrapper>
      <MapWrapper>
        <Map center={DEFAULT_CENTER} zoom={DEFAULT_ZOOM} bounds={bounds} fullscreenControl>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            className="tile-layer"
          />
          {schools &&
            schools.map((school: any) => {
              if (!doesSchoolHaveCoords(school)) return null;

              const coords = getSchoolCoords(school) as LatLngExpression;

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
          <ClipLoader size={150} color={theme.colors.primary} loading={!error && isLoading} />
        </Overlay>
        <NotListedWrapper active={notListedCount > 0 && notListedVisible}>
          <NotListed>
            Niestety, część szkół z naszej bazy ({notListedCount}) nie jest zaznaczona na mapie.{' '}
            <br />
            Aby wyświetlić wszystkie pozycje, przełącz na{' '}
            <Link to={getPathWithPreservedParams('/schools/grid')}>widok listy</Link>.
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