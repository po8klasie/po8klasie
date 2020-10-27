import React, { FC } from 'react';
import styled from '../../../styling/styled';
import Card from '../../Card';
import { splitArrayInHalf } from '../../../utils/misc';
import Section from './Section';
import { nanoid } from 'nanoid';

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
    text-align: right;
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
  classes: any;
}

const SchoolPastProfiles: FC<SchoolPastProfilesProps> = ({ classes }) => {
  return (
    <Section>
      <h2>Progi punktowe 2018</h2>
      {classes && classes.length > 0 ? (
        <Card>
          <PastProfilesGrid>
            {splitArrayInHalf(classes).map((half: any) => (
              <table key={nanoid()}>
                <thead>
                  <tr>
                    <th>Klasa z przedmiotami rozszerzonymi</th>
                    <th>Próg punktowy</th>
                  </tr>
                </thead>
                <tbody>
                  {half.map((c: any) => (
                    <tr key={c.subjects.map((s: any) => s.name).join('-')}>
                      <td>{c.subjects.map((s: any) => s.name).join('-')}</td>
                      <td>
                        {c.stats && c.stats[0].points_min > 0 && (
                          <>
                            <strong>{c.stats[0].points_min}</strong> pkt
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </PastProfilesGrid>
        </Card>
      ) : (
        <p>Brak danych</p>
      )}
    </Section>
  );
};

export default SchoolPastProfiles;
