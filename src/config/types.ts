export type FilterDefinition = {
  key: string;
  component: string; // TODO: More strict types
  options?: any; // TODO: More strict types
  validator: string; // TODO: More strict types
  initialValue: string | unknown[];
};

export type FiltersConfig = FilterDefinition[];

export interface AppearanceConfig {
  appName: string;
}

export interface ProjectConfig {
  projectID: string;
  filters: FiltersConfig;
  appearance: AppearanceConfig;
}
