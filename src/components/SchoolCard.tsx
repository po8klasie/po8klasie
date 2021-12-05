import React, { FC } from 'react';
import { Link } from '@reach/router';
import styled from '../styling/styled';
import Card from './Card';
import useFavouriteSchools from '../hooks/useFavouriteSchools';
import AddRemoveFavourite from './AddRemoveFavourite';
import { ISchoolCardPropsFragment } from '../types/graphql';
import { PATH_PREFIX } from "../LegacyRoutes";

const Wrapper = styled(Card)`
  margin-bottom: 3em;
  @media (min-width: 1100px) {
    flex-direction: row;
    padding: 32px;
  }
  .school-type {
    display: block;
    font-size: 0.9em;
    color: #707070;
    text-transform: uppercase;
  }
  h4 {
    margin-top: 0.5em;
    margin-bottom: 0;
    font-size: 1.5em;
    color: #272727;
    & > a {
      color: #272727;
      text-decoration: none;
    }
  }
  .district {
    display: block;
    font-size: 0.9em;
    color: #707070;
    text-transform: uppercase;
    margin: 1em 0;
  }
  .side-content {
    flex: 1 0 auto;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    @media (min-width: 1100px) {
      margin-left: 1em;
    }
  }
  .main-content {
    flex: 1 0 auto;
    @media (min-width: 1100px) {
      flex: 0 1 720px;
    }
  }
`;

interface SchoolCardProps {
  school: ISchoolCardPropsFragment;
}

const SchoolCard: FC<SchoolCardProps> = ({
  school: {
    isPublic,
    schoolId,
    schoolName,
    address: { district },
  },
}) => {
  const { isSchoolFavourite, toggleFavouriteSchool } = useFavouriteSchools();
  return (
    <Wrapper>
      <div className="main-content">
        <span className="school-type">Szkoła {!isPublic && 'nie'}publiczna</span>
        <h4>
          <Link to={`${PATH_PREFIX}/school/${schoolId}`}>{schoolName}</Link>
        </h4>
        <span className="district">{district}</span>
      </div>
      <div className="side-content">
        <Link to={`${PATH_PREFIX}/school/${schoolId}`}>Odwiedź stronę szkoły</Link>
        <AddRemoveFavourite
          isFavourite={isSchoolFavourite(schoolId || '')}
          isSmallMargin
          onClick={() => toggleFavouriteSchool(schoolId || '')}
        />
      </div>
    </Wrapper>
  );
};

export default SchoolCard;
