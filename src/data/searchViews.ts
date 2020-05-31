import { FC } from 'react';
import GridSearchView from '../components/search/views/Grid';
import { School } from '../types';
import MapSearchView from '../components/search/views/Map';

export interface SearchViewProps {
  schools: School[];
  count: number;
  isFetching: boolean;
  fetchedAll: boolean;
}

export interface SearchView {
  title: string;
  id: string;
  component: FC<SearchViewProps>;
  layout?: {
    enablePagination?: boolean;
    enableOrdering?: boolean;
  };
}

export const searchViews: SearchView[] = [
  {
    title: 'Widok listy',
    id: 'grid',
    component: GridSearchView,
    layout: {
      enablePagination: true,
      enableOrdering: true,
    },
  },
  {
    title: 'Widok mapy',
    id: 'map',
    component: MapSearchView,
  },
];

export const DEFAULT_VIEW_ID = 'grid';

export const DEFAULT_VIEW = searchViews.find(
  v => v.id === DEFAULT_VIEW_ID,
) as SearchView;
