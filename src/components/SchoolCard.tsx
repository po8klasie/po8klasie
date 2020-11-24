import React, { FC } from 'react';
import { Link } from '@reach/router';
import styled from '../styling/styled';
import Card from './Card';

const Wrapper = styled(Card)`
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
    flex-shrink: 0;
    text-align: right;
  }
  .content {
    flex: 1 0 auto;
  }
  a {
    text-decoration: underline;
  }
`;

type SchoolCardProps = {
  school: any;
};

const SchoolCard: FC<SchoolCardProps> = ({ school }) => (
  <Wrapper>
    <div className="content">
      <span className="school-type">Szkoła {!school.is_public && 'nie'}publiczna</span>
      <h4>
        <Link to={`/school/${school.id}`}>{school.school_name}</Link>
      </h4>
      <span className="district">{school.address.district}</span>
    </div>
    <div className="bottom">
      <Link to={`/school/${school.id}`}>Więcej</Link>
    </div>
  </Wrapper>
);

export default SchoolCard;
