import { SchoolInfoSectionId } from '../components/app/SchoolPage/schoolInfoSections/schoolInfoSections';
import { MapContainerProps } from 'react-leaflet';

export type FilterDefinition = {
  key: string;
  component: string; // TODO: More strict types
  options?: Record<string, unknown>; // TODO: More strict types
  validator: string; // TODO: More strict types
  displayInRowOnMobile: boolean;
  initialValue: string | unknown[];
};

export type SearchViewConfig = {
  mapOptions: MapContainerProps;
  defaultQuery: Record<string, string>;
  filters: FilterDefinition[];
};

export interface AppearanceConfig {
  appName: string;
}

export interface SchoolInfoConfig {
  enabledSchoolInfoSectionIds: SchoolInfoSectionId[];
}

export interface ProjectConfig {
  projectID: string;
  searchView: SearchViewConfig;
  appearance: AppearanceConfig;
  schoolInfo: SchoolInfoConfig;
}
