import React, { FC } from 'react';
import { Link } from '@reach/router';
import { nanoid } from 'nanoid';
import styled from '../styling/styled';

const BreadcrumbsList = styled.ul`
  display: block;
  margin: 0;
  padding-inline-start: 0;
  font-size: 0.8em;

  li {
    display: inline-block;

    a {
      font-weight: normal;
    }

    & + li:before {
      padding: 8px;
      color: ${(props) => props.theme.colors.primary};
      content: '>';
    }
  }
`;

type BreadcrumbsProps = {
  steps: [string, string?][];
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ steps }) => {
  const stepsAll = [['Strona główna', '/'], ...steps];

  return (
    <BreadcrumbsList>
      {stepsAll.map(([label, link]) => {
        return (
          <li key={nanoid()}>
            <Link to={link ?? ''}>{label}</Link>
          </li>
        );
      })}
    </BreadcrumbsList>
  );
};
export default Breadcrumbs;
