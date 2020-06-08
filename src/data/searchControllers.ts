import { searchQueryControllerConfig } from '../components/search/controllers/SearchQueryController';
import { searchPaginationControllerConfig } from '../components/search/controllers/SearchPaginationController';
import { searchViewControllerConfig } from '../components/search/controllers/SearchViewController';
// import { searchOrderingControllerConfig } from '../components/search/controllers/SearchOrderingController';
import { searchFiltersControllerConfig } from '../components/search/controllers/SearchFiltersController';

export const searchControllersConfigs = {
  ...searchQueryControllerConfig,
  ...searchPaginationControllerConfig,
  ...searchViewControllerConfig,
  // ...searchOrderingControllerConfig,
  ...searchFiltersControllerConfig,
};
