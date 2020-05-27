import {areObjectsDifferent, removeFromObject} from "./misc";
import {School} from "../types";
import {getPageNumberFromPaginationUrl} from "./urls";
import {getTotalPages} from "./pagination";

export const searchDataDidChange = (searchDataFromState: any, searchDataFromParams: any) => {
    const keysToRemoveBeforeComparing = ['page', 'view'];
    return areObjectsDifferent(
        removeFromObject(searchDataFromState, keysToRemoveBeforeComparing),
        removeFromObject(searchDataFromParams, keysToRemoveBeforeComparing),
    );
};

export const getPayloadFromState = (stateValue: any) => ({
    results: stateValue.schools.results,
    responseData: stateValue.schools.responseData,
    fetchingData: {
        isFetching: false,
        fetchedAll: false
    }
});

interface GenerateResultsOptions {
    resultsFromState: School[][]
    searchDataDidChange: boolean
    response: any
};

export const generateResults = ({resultsFromState, searchDataDidChange, response}: GenerateResultsOptions) => {
    const pageNo = getPageNumberFromPaginationUrl(response.previous, response.next);
    const totalPages = getTotalPages(response.count) + 1;
    const results = resultsFromState.length > 0 && searchDataDidChange
        ? resultsFromState
        : new Array(totalPages).fill([]); // create 2d array

    results[pageNo] = response.results;

    return results;
};

export const getResetedSearchDataProperties = (searchData: any) => ({
    ...searchData,
    page: 1,
});
