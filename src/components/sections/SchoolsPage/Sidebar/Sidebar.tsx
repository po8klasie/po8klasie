import React, { FC, ReactNode } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BsX } from 'react-icons/bs/index';
import styled from '../../../../styling/styled';
import Filters from './Filters';
import SidebarSection, { SidebarTitle } from './SidebarSection';
import { UseFiltersOutput } from '../../../../hooks/useFilters';
import QueryFilter from './QueryFilter';
import CloseSidebarBtn from './CloseSidebarBtn';

const SidebarInnerWrapper = styled.div`
  height: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: white;
`;

const Count = styled.small`
  display: block;
  margin-top: 0.8rem;
`;

const SwitchViewLinkWrapper = styled.div`
  @media (max-width: 780px) {
    display: none;
  }
`;

interface SidebarProps {
  switchViewLinkElement: ReactNode;
  filters: UseFiltersOutput;
  query: string;
  onQueryChange: (v: string) => void;
  count?: number;
  closeSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  switchViewLinkElement,
  filters,
  query,
  onQueryChange,
  count,
  closeSidebar,
}) => {
  return (
    <SidebarInnerWrapper>
      <PerfectScrollbar options={{ wheelPropagation: false }}>
        <SidebarSection>
          <CloseSidebarBtn onClick={closeSidebar}>
            <BsX />
          </CloseSidebarBtn>
          <SwitchViewLinkWrapper>{switchViewLinkElement}</SwitchViewLinkWrapper>
          <SidebarTitle>Znajdź wymarzoną szkołę</SidebarTitle>
          <QueryFilter query={query} onQueryChange={onQueryChange} />
          {typeof count !== 'undefined' && <Count>Liczba wyników: {count}</Count>}
        </SidebarSection>
        <Filters filters={filters} />
      </PerfectScrollbar>
    </SidebarInnerWrapper>
  );
};

export default Sidebar;
