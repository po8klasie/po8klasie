import React, { FC, useState } from 'react';
import { nanoid } from 'nanoid';
import styled from '../../../styling/styled';
import Card from '../../Card';
import { splitArrayInHalf } from '../../../utils/misc';
import Section from './Section';
import { ParsedClasses, ParsedClassNode } from '../../../utils/schoolClasses';

const TabButton = styled.button<{ active: boolean }>`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
  background: transparent;
  border-radius: 4px;
  border: 2px solid ${({ active, theme }) => (active ? theme.colors.primary : 'transparent')};
  padding: 0.2rem 0.5rem;
  margin: 0.1rem 0.3rem;
  transition: 0.2s all;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.light};
  }

  &:first-of-type {
    margin-left: 0;
  }
`;

const TabButtonsWrapper = styled.div`
  margin-bottom: 2rem;
`;

const PastProfilesGrid = styled.div<{ narrow: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ narrow }) => (narrow ? 1 : 2)}, 1fr);
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
  span {
    color: #707070;
    font-size: 0.8em;
    display: block;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const SchoolClassesCardWrapper = styled(Card)<{ narrow: boolean }>`
  width: ${({ narrow }) => (narrow ? 'calc(50% - 4rem)' : 'auto')};
  @media (max-width: 950px) {
    width: auto;
  }
`;

interface SchoolClassRowProps {
  schoolClass: ParsedClassNode;
}

const SchoolClassRow: FC<SchoolClassRowProps> = ({
  schoolClass: { extendedSubjects, statistics, name },
}) => (
  <tr>
    <td>
      {extendedSubjects.map((str) => str.toLowerCase()).join('-')}
      <span>{name}</span>
    </td>
    <td>
      {statistics && statistics.pointsMin > 0 ? <strong>{statistics.pointsMin}</strong> : 'N/A'} pkt
    </td>
  </tr>
);

interface SchoolClassesForYearProps {
  schoolClassesForYear: ParsedClassNode[];
}

const SchoolClassesForYear: FC<SchoolClassesForYearProps> = ({ schoolClassesForYear }) => {
  const halves = splitArrayInHalf(schoolClassesForYear);

  if (halves[0].length === 0) return <p>Brak danych</p>;

  const isNarrow = halves[1].length === 0;

  return (
    <SchoolClassesCardWrapper narrow={isNarrow}>
      <PastProfilesGrid narrow={isNarrow}>
        {halves.map((classes) =>
          classes.length === 0 ? null : (
            <table key={nanoid()}>
              <thead>
                <tr>
                  <th>Klasa z przedmiotami rozszerzonymi</th>
                  <th>Próg punktowy</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((schoolClass) => (
                  <SchoolClassRow schoolClass={schoolClass} key={nanoid()} />
                ))}
              </tbody>
            </table>
          ),
        )}
      </PastProfilesGrid>
    </SchoolClassesCardWrapper>
  );
};
interface SchoolClassesFormPastYearsProps {
  classes: ParsedClasses['pastYears'];
}

const SchoolClassesFromPastYears: FC<SchoolClassesFormPastYearsProps> = ({ classes }) => {
  const sortedClasses = classes
    ? Object.entries(classes).sort(([a], [b]) => parseInt(b, 10) - parseInt(a, 10))
    : [];
  const schoolClassesYears = sortedClasses.map(([year]) => parseInt(year, 10));
  const [activeSchoolClassesYear, setActiveSchoolClassesYear] = useState<number>(
    schoolClassesYears[0] ?? -1,
  );

  if (sortedClasses.length === 0)
    return (
      <Section>
        <h2>Progi punktowe z poprzednich lat</h2>
        <p>Brak danych</p>
      </Section>
    );

  return (
    <Section>
      <h2>Progi punktowe z poprzednich lat</h2>
      <TabButtonsWrapper>
        {schoolClassesYears.map((year) => (
          <TabButton
            onClick={() => setActiveSchoolClassesYear(year)}
            active={year === activeSchoolClassesYear}
          >
            {year} / {year + 1}
          </TabButton>
        ))}
      </TabButtonsWrapper>
      <SchoolClassesForYear schoolClassesForYear={classes[activeSchoolClassesYear]} />
    </Section>
  );
};

export default SchoolClassesFromPastYears;
