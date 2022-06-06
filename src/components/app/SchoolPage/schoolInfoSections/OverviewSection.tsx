import { FC } from 'react';
import dynamic from 'next/dynamic';
import { MdHome } from '@react-icons/all-files/md/MdHome';
import { MdLink } from '@react-icons/all-files/md/MdLink';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import { IconType } from 'react-icons';
import { LatLngTuple } from 'leaflet';
import SchoolInfoSection from './SchoolInfoSection';
import { SectionComponentProps } from './types';
import { parseCoords } from '../../../../utils/map';

const SchoolLocationMap = dynamic(() => import('../SchoolLocationMap'), { ssr: false });

interface ItemWithIconProps {
  icon: IconType;
}

const ItemWithIcon: FC<ItemWithIconProps> = ({ children, icon: Icon }) => (
  <span className="flex items-center">
    <span className="bg-primaryBg rounded-full p-1 text-lg">
      <Icon />
    </span>
    <span className="ml-3">{children}</span>
  </span>
);

const OverviewSection: FC<SectionComponentProps> = ({ school }) => {
  const position: LatLngTuple = parseCoords(school);

  return (
    <SchoolInfoSection id="overview" updateTime={school.updatedAt}>
      <div className="py-3 px-5">
        <div className="grid lg:grid-cols-6">
          <div className="col-span-3 xl:col-span-2">
            <h3 className="text-lg font-bold text-dark">Podstawowe informacje</h3>
            <ul className="mt-2 text-gray">
              <li className="my-2">
                <ItemWithIcon icon={MdHome}>
                  {school.street} {school.buildingNo}, {school.zipCode} {school.town}
                </ItemWithIcon>
              </li>
              <li className="my-2">
                <ItemWithIcon icon={MdLink}>{school.website}</ItemWithIcon>
              </li>
              {/* not yet implemented */}
              {/* <li className="my-2"> */}
              {/*   <ItemWithIcon icon={MdPhone}>{school.}</ItemWithIcon> */}
              {/* </li> */}
              <li className="my-2">
                <ItemWithIcon icon={MdEmail}>{school.email}</ItemWithIcon>
              </li>
              {/* not yet implemented */}
              {/* <li className="my-2"> */}
              {/*   <ItemWithIcon icon={MdOutlineSchool}>{school.}</ItemWithIcon> */}
              {/* </li> */}
            </ul>
          </div>
          <div className="col-span-3 xl:col-span-4 h-72 xl:mt-0 mt-2">
            <SchoolLocationMap position={position} />
          </div>
        </div>
      </div>
      {school.description && (
        <div className="border-t border-light py-2 px-5">
          <h4 className="text-dark text-base font-semibold">O szkole</h4>
          <p className="text-gray my-2">{school.description}</p>
        </div>
      )}
    </SchoolInfoSection>
  );
};

export default OverviewSection;
