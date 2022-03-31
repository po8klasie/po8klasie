import React, { FC } from 'react';
import styles from './styles/SchoolsListing.module.css';
import SchoolCard from '../SchoolCard';
import { RailsApiSchool } from '../../../types';
import { useProjectConfig } from '../../../config/projectConfigContext';

interface AlphaV3SchoolsListingProps {
  results: RailsApiSchool[];
}

const SchoolsListing: FC<AlphaV3SchoolsListingProps> = ({ results }) => {
  const { projectID } = useProjectConfig();
  return (
    <div className={styles.schoolsListing}>
      {results.map((school) => (
        <SchoolCard key={school.id} school={school} projectID={projectID as string} />
      ))}
    </div>
  );
};

export default SchoolsListing;
