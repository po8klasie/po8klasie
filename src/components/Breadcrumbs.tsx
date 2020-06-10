import React from 'react';
import styled from '../styling/styled';
import { Link } from '@reach/router';

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

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const steps = [['Strona główna', '/'], ...props.steps];
  return (
    <BreadcrumbsList>
      {steps.map(([label, link]) => {
        return (
          <li>
            <Link to={link ?? ''}>{label}</Link>
          </li>
        );
      })}
    </BreadcrumbsList>
  );
};
export default Breadcrumbs;
