import React, { createElement, FC } from 'react';
import { Link } from '@reach/router';
import { IconType } from 'react-icons';
import styled from '../../../styling/styled';
import getPathWithPreservedParams from '../../../utils/url';

const SwitchLink = styled(Link)`
  background: none;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 5px;
  }
`;

interface SwitchViewLinkProps {
  viewPath: string;
  label: string;
  icon: IconType;
}

const SwitchViewLink: FC<SwitchViewLinkProps> = ({ viewPath, label, icon }) => (
  <SwitchLink to={getPathWithPreservedParams(`/schools/${viewPath}`)}>
    {createElement(icon)}
    {label}
  </SwitchLink>
);

export default SwitchViewLink;
