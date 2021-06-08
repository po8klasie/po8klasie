import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import Card from '../../Card';
import Section from './Section';
import styled from '../../../styling/styled';

const SchoolProfilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 3em;
  grid-column-gap: 4em;

  h5 {
    font-weight: normal;
    font-family: Open Sans;
    font-size: 0.9em;
    margin: 0;
  }
  h4 {
    margin: 10px 0 7px 0;
  }
  span {
    color: #707070;
    font-size: 0.8em;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

interface SchoolProfilesProps {
  currentYearClasses: {
    name: string;
    year: number;
    extendedSubjects: string[];
  }[];
}

const SchoolProfiles: FC<SchoolProfilesProps> = ({ currentYearClasses }) => {
  return (
    <Section>
      <h2>Tegoroczne profile klas</h2>
      {currentYearClasses.length === 0 && <p>Brak danych</p>}
      <SchoolProfilesWrapper>
        {currentYearClasses.map((profile) => {
          return (
            <Card key={nanoid()}>
              <h4>{profile.extendedSubjects.map((str) => str.toLowerCase()).join(', ')}</h4>
              <h5>{profile.name}</h5>
            </Card>
          );
        })}
      </SchoolProfilesWrapper>
      <strong>[UWAGA! testowe dane. Są z 2020]</strong>
    </Section>
  );
};

export default SchoolProfiles;
