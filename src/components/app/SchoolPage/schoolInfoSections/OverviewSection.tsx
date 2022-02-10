import { FC } from 'react';
import dynamic from 'next/dynamic';
import { MdOutlineHome, MdLink, MdPhone, MdOutlineSchool, MdOutlineEmail } from 'react-icons/md';
import { IconType } from 'react-icons';
import { LatLngTuple } from 'leaflet';
import SchoolInfoSection from './SchoolInfoSection';

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

const OverviewSection: FC = () => {
  const position: LatLngTuple = [54.49888049636015, 18.517496522162748];
  return (
    <SchoolInfoSection source="Urząd Miasta w Gdyni" id="overview">
      <div className="py-3 px-5">
        <div className="grid lg:grid-cols-6">
          <div className="col-span-3 xl:col-span-2">
            <h3 className="text-lg font-bold text-dark">Podstawowe informacje</h3>
            <ul className="mt-2 text-gray">
              <li className="my-2">
                <ItemWithIcon icon={MdOutlineHome}>Narcyzowa 6, 81-653 Gdynia</ItemWithIcon>
              </li>
              <li className="my-2">
                <ItemWithIcon icon={MdLink}>1alo.org</ItemWithIcon>
              </li>
              <li className="my-2">
                <ItemWithIcon icon={MdPhone}>(58) 664 82 36</ItemWithIcon>
              </li>
              <li className="my-2">
                <ItemWithIcon icon={MdOutlineEmail}>sekretariat@1alo.org</ItemWithIcon>
              </li>
              <li className="my-2">
                <ItemWithIcon icon={MdOutlineSchool}>Dyrektor Anna Kowalczyk</ItemWithIcon>
              </li>
            </ul>
          </div>
          <div className="col-span-3 xl:col-span-4 h-72 xl:mt-0 mt-2">
            <SchoolLocationMap position={position} />
          </div>
        </div>
      </div>
      <div className="border-t border-light py-2 px-5">
        <h4 className="text-dark text-base font-semibold">O szkole</h4>
        <p className="text-gray my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor et magni omnis
          porro quidem reprehenderit rerum voluptates! Distinctio minus, unde. At atque consequatur
          cum dignissimos incidunt nam obcaecati ullam?
        </p>
      </div>
    </SchoolInfoSection>
  );
};

export default OverviewSection;
