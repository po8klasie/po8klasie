import React, { createElement, FC } from 'react';
import { Link } from '@reach/router';
import { IconType } from 'react-icons';
import styled from '../../../styling/styled';
import getPathWithPreservedParams from '../../../utils/url';
import { PATH_PREFIX } from "../../../LegacyRoutes";

const SwitchLink = styled(Link)`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 5px;
  }
`;

interface SwitchViewLinkProps {
  viewPath: string;
  label: string;
  icon: IconType;
}

const SwitchViewLink: FC<SwitchViewLinkProps> = ({ viewPath, label, icon }) => (
  <SwitchLink to={getPathWithPreservedParams(`${PATH_PREFIX}/schools/${viewPath}`)}>
    {createElement(icon)}
    {label}
  </SwitchLink>
);

export default SwitchViewLink;
