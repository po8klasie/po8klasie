import React, { FC, ReactNode } from 'react';
import styled from '../../../../styling/styled';
import Filters from './Filters';
import { FilterData, filters } from '../../../../data/filters';
import SidebarSection, { SidebarTitle } from './SidebarSection';

const SidebarInnerWrapper = styled.div`
  height: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

interface SidebarProps {
  switchViewLinkElement: ReactNode;
  filterDefinitions: FilterData[];
  filterValues: Record<string, string[]>;
}

const Sidebar: FC<SidebarProps> = ({ switchViewLinkElement, filterDefinitions, filterValues }) => {
  return (
    <SidebarInnerWrapper>
      <SidebarSection>
        {switchViewLinkElement}
        <SidebarTitle>Znajdź wymarzoną szkołę</SidebarTitle>
      </SidebarSection>
      <Filters filterDefinitions={filterDefinitions} filterValues={filterValues} />
    </SidebarInnerWrapper>
  );
};

export default Sidebar;
