import React, { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import SchoolsListing from './SchoolsListing';
import { RailsApiSchool } from '../../../types';

const SchoolsMap = dynamic(() => import('./SchoolsMap'), { ssr: false });

interface SchoolsBrowserProps {
  results: RailsApiSchool[];
}

const SchoolsBrowser: FC<SchoolsBrowserProps> = ({ results }) => {
  const [isMapExpanded, setMapExpanded] = useState(false);
  const handleExpandToggle = () => setMapExpanded(!isMapExpanded);

  // < tailwind lg https://tailwindcss.com/docs/responsive-design
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

  return (
    <div>
      <SchoolsListing results={results} />
      <SchoolsMap
        results={results}
        isExpanded={isMobile || isMapExpanded}
        hideExpandBtn={isMobile}
        onExpandToggle={handleExpandToggle}
      />
    </div>
  );
};

export default SchoolsBrowser;
