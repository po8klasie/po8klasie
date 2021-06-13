import React, { FC } from 'react';
import { Link } from '@reach/router';
import { nanoid } from 'nanoid';
import RemoveFavButton from './RemoveFavButton';
import { FavouriteSchoolWrapper } from './FavouriteSchoolWrapper';
import { ISchoolNode } from '../../../types/graphql';

export interface FavouriteSchoolProps {
  school: Pick<ISchoolNode, 'schoolName' | 'schoolId' | 'isPublic'> & {
    address: { district: ISchoolNode['address']['district'] };
    classes: {
      edges: {
        node: { name: string; extendedSubjects: { edges: { node: { name: string } }[] } };
      }[];
    };
  };
  toggleFavourite: (schoolID: string) => void;
}

const FavouriteSchool: FC<FavouriteSchoolProps> = ({ school, toggleFavourite }) => {
  return (
    <FavouriteSchoolWrapper>
      <div className="content">
        <div className="top">
          <div>
            <span className="school-type">Szkoła {!school.isPublic && 'nie'}publiczna</span>
            <h4>
              <Link to={`/school/${school.schoolId}`}>{school.schoolName}</Link>
            </h4>
            <span className="district">{school.address.district}</span>
          </div>
          <div className="top-right">
            <Link to={`/school/${school.schoolId}`}>Zobacz pełny profil szkoły</Link>
            <RemoveFavButton onClick={() => toggleFavourite(school.schoolId as string)}>
              Usuń z ulubionych
            </RemoveFavButton>
          </div>
        </div>
        <div>
          <h5>Tegoroczne profile</h5>
          <div>
            {school.classes.edges.map(({ node }, i, arr) => (
              <>
                <span key={nanoid()} style={{ whiteSpace: 'nowrap' }}>
                  {node.extendedSubjects.edges
                    .map(({ node: subject }) => subject.name.toLowerCase())
                    .join('-')}{' '}
                  <small>({node.name})</small>
                </span>
                {i !== arr.length - 1 ? ',  ' : ''}
              </>
            ))}
          </div>
        </div>
      </div>
    </FavouriteSchoolWrapper>
  );
};

export default FavouriteSchool;
