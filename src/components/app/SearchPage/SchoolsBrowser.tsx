import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import SchoolsListing from './SchoolsListing';
import { ISchoolSearchData } from '../../../types';

const SchoolsMap = dynamic(() => import('./SchoolsMap'), { ssr: false });

interface SchoolsBrowserProps {
  items: ISchoolSearchData[];
}

const SchoolsBrowser: FC<SchoolsBrowserProps> = ({ items }) => {
  const [isMapExpanded, setMapExpanded] = useState(false);
  const handleExpandToggle = () => setMapExpanded(!isMapExpanded);

  // less than tailwind's `lg` preset https://tailwindcss.com/docs/responsive-design
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <div>
      <SchoolsListing items={items} />
      <SchoolsMap
        results={items}
        isExpanded={isMobile || isMapExpanded}
        hideExpandBtn={isMobile}
        onExpandToggle={handleExpandToggle}
      />
    </div>
  );
};

export default SchoolsBrowser;
