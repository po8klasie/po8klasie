import React, { FC } from 'react';
import SchoolCard from '../SchoolCard';
import { ISchoolSearchData } from '../../../types';

interface AlphaV3SchoolsListingProps {
  items: ISchoolSearchData[];
}

const SchoolsListing: FC<AlphaV3SchoolsListingProps> = ({ items }) => (
  <div className="absolute top-3/4 w-full z-10 bg-appBg px-4 pt-4 grid gap-y-4 border-box-border lg:relative lg:w-2/5 lg:top-navbarHeight">
    {items.map((school) => (
      <SchoolCard key={school.rspo} school={school} />
    ))}
  </div>
);
export default SchoolsListing;
