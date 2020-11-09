import React from 'react';
import { Link } from '@reach/router';
import { useSchoolDetails } from '../../../api/schoolDetails';
import { useHighSchoolClasses } from '../../../api/highschoolClasses';
import { nanoid } from 'nanoid';
import { useFavouriteSchools } from '../../../hooks/useFavouriteSchools';
import { mockedProfile } from '../../../utils/mockedProfile';
import RemoveFavButton from './RemoveFavButton';
import { ErrorInfo } from '../../Info';
import { FavouriteSchoolWrapper, LoadingCard } from './FavouriteSchoolWrapper';

const profiles = Array(3).fill(mockedProfile);

interface FavouriteSchoolProps {
  schoolID: string;
  updateCallback: () => void;
}

const FavouriteSchool: React.FC<FavouriteSchoolProps> = ({
  schoolID,
  updateCallback,
}) => {
  const { data: school, error: schoolError } = useSchoolDetails(
    Number(schoolID as any),
  );

  const { data: classes, error: classesError } = useHighSchoolClasses(
    Number(schoolID as any),
    (school as any)?.school_type,
  );

  const { handleFavourite } = useFavouriteSchools(schoolID);

  const handleClick = () => {
    handleFavourite();
    updateCallback();
  };

  if (schoolError || classesError) {
    return (
      <FavouriteSchoolWrapper>
        <ErrorInfo />
      </FavouriteSchoolWrapper>
    );
  }

  if (!school) return <LoadingCard />;

  return (
    <FavouriteSchoolWrapper>
      <div className="content">
        <div className="top">
          <div>
            <span className="school-type">
              Szkoła {!school.is_public && 'nie'}publiczna
            </span>
            <h4>
              <Link to={`/school/${school.id}`}>{school.school_name}</Link>
            </h4>
            <span className={'district'}>{school.address.district}</span>
          </div>
          <div className="top-right">
            <Link to={`/school/${school.id}`}>Zobacz pełny profil szkoły</Link>
            <RemoveFavButton onClick={handleClick}>
              Usuń z ulubionych
            </RemoveFavButton>
          </div>
        </div>

        <div className="grid">
          <div>
            <h5>Tegoroczne profile</h5>
            <ul>
              {profiles.map((profile: any) => (
                <li key={nanoid()}>
                  <span>{profile.extendedSubjects.join(' - ')}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Zeszłoroczne progi punktowe</h5>
            {classes && classes.length > 0 ? (
              <ul>
                {classes.map((c: any) => (
                  <li key={nanoid()}>
                    <span>{c.subjects.map((s: any) => s.name).join('-')}</span>
                    <span className="points">
                      {c.stats && c.stats[0].points_min > 0 && (
                        <>{c.stats[0].points_min} pkt</>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Brak danych</span>
            )}
          </div>
        </div>
      </div>
    </FavouriteSchoolWrapper>
  );
};

export default FavouriteSchool;
