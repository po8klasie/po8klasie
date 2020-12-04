import React, { FC } from 'react';
import { Link } from '@reach/router';
import { School } from '../types';
import styled from '../styling/styled';
import Card from './Card';
import { useFavouriteSchools } from '../hooks/useFavouriteSchools';
import AddRemoveFavourite from './AddRemoveFavourite';

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
  .bottom {
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
  .content {
    flex: 1 0 auto;
    @media (min-width: 1100px) {
      flex: 0 1 720px;
    }
  }
  a {
    text-decoration: underline;
  }
`;

type SchoolCardProps = {
  school: School;
};

const SchoolCard: FC<SchoolCardProps> = ({ school: { is_public, id, school_name, address } }) => {
  const { isSchoolFavourite, toggleFavouriteSchool } = useFavouriteSchools();
  const schoolId = id.toString();
  return (
    <Wrapper>
      <div className="content">
        <span className="school-type">Szkoła {!is_public && 'nie'}publiczna</span>
        <h4>
          <Link to={`/school/${id}`}>{school_name}</Link>
        </h4>
        <span className="district">{address.district}</span>
      </div>
      <div className="bottom">
        <Link to={`/school/${id}`}>Odwiedź stronę szkoły</Link>
        <AddRemoveFavourite
          isFavourite={isSchoolFavourite(schoolId || '')}
          onClick={() => toggleFavouriteSchool(schoolId || '')}
        />
      </div>
    </Wrapper>
  );
};

export default SchoolCard;
