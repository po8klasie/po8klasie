import React, { FC } from 'react';
import Link from 'next/link';
import styles from './styles/SchoolCard.module.css';
import { RailsApiSchool } from '../../types';
import {
  getLanguageEmoji,
  getSchoolTypeFromRspoInstitutionTypeId,
} from '../../utils/apiDataMapping';

interface ForeignLanguagesProps {
  foreignLanguages: string | null;
}

const ForeignLanguages: FC<ForeignLanguagesProps> = ({ foreignLanguages }) => {
  if (!foreignLanguages) return <span>brak danych</span>;
  return (
    <>
      {foreignLanguages.split(',').map((lang: string) => (
        <span className="first:ml-0 mx-2">{getLanguageEmoji(lang)}</span>
      ))}
    </>
  );
};

export interface SchoolCardProps {
  school: RailsApiSchool;
  projectID: string;
}

const SchoolCard: FC<SchoolCardProps> = ({ school, projectID }) => {
  return (
    <div className="border border-light rounded-md">
      <div className="m-4 text-gray">
        <h3 className="font-primary font-semibold text-lg text-dark hover:underline">
          <Link href={`/${projectID}/school/${school.id}`}>
            <a>{school.name}</a>
          </Link>
        </h3>
        <ul className={styles.schoolPropertiesList}>
          <li>{school.public ? 'Szkoła publiczna' : 'Szkoła niepubliczna'}</li>
          <li>{getSchoolTypeFromRspoInstitutionTypeId(school.rspoInstitutionTypeId)}</li>
          <li>
            {school.street} {school.buildingNo}, {school.town}
          </li>
        </ul>
        <div className="mt-2 flex items-center">
          <span className="mr-4">Języki</span>
          <div>
            <ForeignLanguages foreignLanguages={school.foreignLanguages} />
          </div>
        </div>
        <div className="mt-2 flex">
          <span className="whitespace-nowrap mr-4">Profile klas</span>
          {school.classProfiles ? (
            <ul className={styles.schoolClassesList}>
              {school.classProfiles.map((profile) => (
                <li key={profile}>{profile}</li>
              ))}
            </ul>
          ) : (
            <span>brak danych</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
