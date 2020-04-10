import React from 'react';
import styled from '../styling/styled';

interface SchoolTypeBadgeProps {
  bgColor: string;
  borderColor: string;
}

const SchoolTypeBadge = styled.div<SchoolTypeBadgeProps>`
  padding: 5px 10px;
  background: ${props => props.bgColor};
  border: 2px solid ${props => props.borderColor};
  border-radius: 3px;
  display: inline-block;
`;

export const HighSchoolBadge = () => (
  <SchoolTypeBadge
    {...{
      bgColor: '#EBE0FF',
      borderColor: '#BA97FF',
    }}
  >
    LO
  </SchoolTypeBadge>
);

export const TechSchoolBadge = () => (
  <SchoolTypeBadge
    {...{
      bgColor: '#a5dfdf',
      borderColor: '#4BC0C0',
    }}
  >
    T
  </SchoolTypeBadge>
);
const VocationalSchoolBadge = () => (
    <SchoolTypeBadge
        {...{
          bgColor: '#FFE8C2',
          borderColor: '#E6CFA9',
        }}
    >
      B
    </SchoolTypeBadge>
);
interface Badge {
  [k: string]: any;
}


export const badges: Badge = {
  'liceum ogólnokształcące': HighSchoolBadge,
  technikum: TechSchoolBadge,
  'szkoła branżowa I stopnia': VocationalSchoolBadge
};

export default SchoolTypeBadge;
