import React from 'react';
import { nanoid } from 'nanoid';
import Card from '../../Card';
import Section from './Section';
import styled from '../../../styling/styled';
import { mockedProfile } from '../../../utils/mockedProfile';

const SchoolProfilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

const profiles = Array(3).fill(mockedProfile);

const SchoolProfiles = () => {
  return (
    <Section>
      <SchoolProfilesWrapper>
        {profiles.map((profile) => {
          return (
            <Card key={nanoid()}>
              <h5>Przedmioty rozszerzone:</h5>
              <h4>{profile.extendedSubjects.join(', ')}</h4>
              <span>{profile.departmentsNo} oddziały</span>
              <p>{profile.description}</p>
            </Card>
          );
        })}
      </SchoolProfilesWrapper>
    </Section>
  );
};

export default SchoolProfiles;
