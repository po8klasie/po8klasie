import { FC, ReactNode } from 'react';
import GridSearchView from '../components/searchViews/Grid';
import { School } from '../types';
import MapSearchView from '../components/searchViews/Map';
import { FiGrid, FiMap } from 'react-icons/all';

export interface SearchViewProps {
  schools: School[];
  count: number;
  isFetching: boolean;
  fetchedAll: boolean;
}

export interface SearchView {
  title: string;
  id: string;
  iconComponent: FC;
  component: FC<SearchViewProps>;
  layout?: {
    enablePagination?: boolean;
    enableOrdering?: boolean;
  };
}

export const DEFAULT_VIEW_ID = 'grid';

export const searchViews: SearchView[] = [
  {
    title: 'Siatka',
    id: 'grid',
    iconComponent: FiGrid,
    component: GridSearchView,
    layout: {
      enablePagination: true,
      enableOrdering: true,
    },
  },
  {
    title: 'Mapa',
    id: 'map',
    iconComponent: FiMap,
    component: MapSearchView,
  },
];

export const DEFAULT_VIEW = searchViews.find(
  v => v.id === DEFAULT_VIEW_ID,
) as SearchView;
