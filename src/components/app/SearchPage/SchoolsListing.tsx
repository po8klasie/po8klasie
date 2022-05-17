import React, { FC } from 'react';
import SchoolCard from '../SchoolCard';
import { RailsApiSchool } from '../../../types';
import { useProjectConfig } from '../../../config/projectConfigContext';

interface AlphaV3SchoolsListingProps {
  results: RailsApiSchool[];
}

const SchoolsListing: FC<AlphaV3SchoolsListingProps> = ({ results }) => {
  const { projectID } = useProjectConfig();
  return (
    <div className="absolute top-3/4 w-full z-10 bg-appBg px-4 pt-4 grid gap-y-4 border-box-border lg:relative lg:w-2/5 lg:top-navbarHeight">
      {results.map((school) => (
        <SchoolCard key={school.id} school={school} projectID={projectID as string} />
      ))}
    </div>
  );
};

export default SchoolsListing;
