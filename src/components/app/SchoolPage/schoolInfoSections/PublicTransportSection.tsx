import { FC } from 'react';
import SchoolInfoSection from './SchoolInfoSection';
import { SectionComponentProps } from './types';
import styles from './styles/PublicTransportSection.module.css';
import { IoMdBus } from '@react-icons/all-files/io/IoMdBus';
import { MdTrain } from '@react-icons/all-files/md/MdTrain';
import { MdTram } from '@react-icons/all-files/md/MdTram';
import { MdSubway } from '@react-icons/all-files/md/MdSubway';
import { IPublicTransportRoute, IPublicTransportStop } from '../../../../types';

const routeIconClassName = 'mr-2 opacity-70';

interface RouteTypeIconProps {
  type: string;
}

const RouteTypeIcon: FC<RouteTypeIconProps> = ({ type }) => {
  switch (type) {
    case 'bus':
    case 'trolleybus':
      return <IoMdBus className={routeIconClassName} />;
    case 'train':
      return <MdTrain className={routeIconClassName} />;
    case 'tram':
      return <MdTram className={routeIconClassName} />;
    case 'subway':
      return <MdSubway className={routeIconClassName} />;
    default:
      return null;
  }
};

interface PublicTransportRouteProps {
  route: IPublicTransportRoute;
}

const PublicTransportRoute: FC<PublicTransportRouteProps> = ({ route }) => (
  <div className={styles.routeWrapper}>
    <span className={styles.routeName}>
      <RouteTypeIcon type={route.type} />
      <span>{route.ref ?? route.name}</span>
    </span>
    <div className={styles.routeTooltip}>
      <table>
        <tr>
          <td>z: </td>
          <td>{route.routeFrom}</td>
        </tr>
        <tr>
          <td className="pr-2">do: </td>
          <td>{route.routeTo}</td>
        </tr>
      </table>
      <small className="mt-2 text-opacity-10">{route.operator}</small>
    </div>
  </div>
);

interface PublicTransportStopProps {
  stop: IPublicTransportStop;
  distance: number;
}

const PublicTransportStop: FC<PublicTransportStopProps> = ({ stop, distance }) => (
  <>
    <div className="mt-2 flex items-center">
      <span className="font-semibold whitespace-nowrap">
        {stop.name} <small>({distance}m)</small>
      </span>
    </div>
    <div className="flex flex-wrap w-full">
      {stop.publicTransportRoutes.map((route) => (
        <PublicTransportRoute route={route} />
      ))}
    </div>
  </>
);

const PublicTransportSection: FC<SectionComponentProps> = ({ school }) => {
  return (
    <SchoolInfoSection id="publicTransport" overwriteFooter="Źródło: Open Street Map" updateTime="">
      <div className="p-3">
        <h3 className="text-lg font-bold text-dark">Dojazd komunikacją miejską</h3>
        <div className="mt-4">
          {school.publicTransportStops.length === 0 && <span>Brak danych</span>}
          <div>
            {school.publicTransportStops.map(({ publicTransportStop, distance }) => (
              <PublicTransportStop
                stop={publicTransportStop}
                distance={distance}
                key={publicTransportStop.name}
              />
            ))}
          </div>
        </div>
      </div>
    </SchoolInfoSection>
  );
};

export default PublicTransportSection;
