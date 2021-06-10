import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import styled from '../../../styling/styled';
import Card from '../../Card';
import { splitArrayInHalf } from '../../../utils/misc';
import Section from './Section';
import { ParsedClasses } from '../../../utils/schoolClasses';

const PastProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20%;
  table {
    border-collapse: collapse;
  }
  td,
  th {
    padding: 10px 0;
  }
  th {
    text-align: left;
    font-size: 0.7em;
    font-weight: normal;
  }
  td:last-of-type,
  th:last-of-type {
    text-align: center;
  }
  tbody tr td {
    border-bottom: 1px solid black;
  }
  tbody tr:last-of-type td {
    border-bottom: none;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  table:last-of-type {
    thead {
      @media (max-width: 800px) {
        display: none;
      }
    }
    @media (max-width: 800px) {
      border-top: 1px solid black;
    }
  }
`;

interface SchoolPastProfilesProps {
  classes: ParsedClasses['pastYears'];
}

const SchoolPastProfiles: FC<SchoolPastProfilesProps> = ({ classes }) => {
  const sortedClasses = classes
    ? Object.entries(classes).sort(([a], [b]) => parseInt(a, 10) - parseInt(b, 10))
    : [];
  if (sortedClasses.length === 0)
    return (
      <Section>
        <h2>Progi punktowe z poprzednich lat</h2>
        <p>Brak danych</p>
      </Section>
    );

  return (
    <>
      {sortedClasses.map(([year, profiles]) => (
        <Section>
          <h2>Progi punktowe {year}</h2>
          <Card>
            <PastProfilesGrid>
              {splitArrayInHalf(profiles).map((half, i) => {
                if (i === 0 && half.length === 0) return <td>Brak danych</td>;
                if (i === 1 && half.length === 0) return null;
                return (
                  <table key={nanoid()}>
                    <thead>
                      <tr>
                        <th>Klasa z przedmiotami rozszerzonymi</th>
                        <th>Próg punktowy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {half.map((profile) => {
                        return (
                          <tr key={nanoid()}>
                            <td>
                              {profile.extendedSubjects
                                .map((str: string) => str.toLowerCase())
                                .join('-')}
                            </td>
                            <td>
                              {profile.statistics && profile.statistics.pointsMin > 0 && (
                                <>
                                  <strong>{profile.statistics.pointsMin}</strong> pkt
                                </>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                );
              })}
            </PastProfilesGrid>
          </Card>
        </Section>
      ))}
    </>
  );
};

export default SchoolPastProfiles;
