import {searchQueryControllerConfig} from "../components/schoolsPage/SearchQueryController";
import {searchPaginationControllerConfig} from "../components/schoolsPage/SearchPaginationController";
import {searchViewControllerConfig} from "../components/schoolsPage/SearchViewController";
import {searchOrderingControllerConfig} from "../components/schoolsPage/SearchOrderingController";
import {searchFiltersControllerConfig} from "../components/schoolsPage/SearchFiltersController";

export const searchControllersConfigs = {
    ...searchQueryControllerConfig,
    ...searchPaginationControllerConfig,
    ...searchViewControllerConfig,
    ...searchOrderingControllerConfig,
    ...searchFiltersControllerConfig
};

