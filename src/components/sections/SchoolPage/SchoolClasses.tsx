import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import Card from '../../Card';
import Section from './Section';
import styled from '../../../styling/styled';
import subjectNames from '../../../data/subjectNames';
import { IExtendedSubjectName } from '../../../types/graphql';

const SchoolProfilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 3em;
  grid-column-gap: 4em;

  h5 {
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
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

const ExtendedSubjectsHeading = styled.h4`
  min-height: 2.5rem;
`;

interface SchoolClass {
  name: string;
  year: number;
  extendedSubjects: IExtendedSubjectName[];
}

const SchoolClassCard: FC<{ schoolClass: SchoolClass }> = ({
  schoolClass: { name, extendedSubjects },
}) => (
  <Card>
    <h5>Przedmioty rozszerzone:</h5>
    <ExtendedSubjectsHeading>
      {extendedSubjects.map((str) => subjectNames[str]).join(', ')}
    </ExtendedSubjectsHeading>
    <span>{name}</span>
  </Card>
);

interface SchoolClassesProps {
  currentYearClasses: SchoolClass[];
}

const SchoolClasses: FC<SchoolClassesProps> = ({ currentYearClasses }) => {
  return (
    <Section>
      <h2>Tegoroczne profile klas</h2>
      {currentYearClasses.length === 0 && <p>Brak danych</p>}
      <SchoolProfilesWrapper>
        {currentYearClasses.map((schoolClass) => (
          <SchoolClassCard key={nanoid()} schoolClass={schoolClass} />
        ))}
      </SchoolProfilesWrapper>
    </Section>
  );
};

export default SchoolClasses;
