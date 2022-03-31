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

  return (
    <div>
      <SchoolsListing results={results} />
      <SchoolsMap
        results={results}
        isExpanded={isMapExpanded}
        onExpandToggle={handleExpandToggle}
      />
    </div>
  );
};

export default SchoolsBrowser;
