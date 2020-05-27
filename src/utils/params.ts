import { FilterData, filters } from '../data/filters';
// import {
//   apiParamsOverwrites,
//   frontendOnlyParams,
// } from '../data/paramsOverwrites';
// import { orderingTypes } from '../data/ordering';
// import { defaultViewId } from '../data/searchViews';
import {searchControllersConfigs} from "../data/searchControllers";

export type Params = Record<string, string | number | any[]>;
export type ParamsMode = 'api' | 'search';

interface FindParamOverwriteOptions {
  overwritesArr: { apiParam: string | null; searchParam: string }[];
  mode: ParamsMode;
  key: string;
}

const REMOVE_PARAM = 'REMOVE_PARAM';

export const findParamOverwrite = (options: FindParamOverwriteOptions) =>
  options.overwritesArr.reduce((prev: null | string, curr) => {
    if (!prev && options.mode === 'search' && curr.apiParam === options.key)
      return curr.searchParam;
    if (!prev && options.mode === 'api' && curr.searchParam === options.key) {
      if (curr.apiParam) return curr.apiParam;
      return REMOVE_PARAM;
    }
    return prev;
  }, null);

export const transformArr = (arr: any[], mode: ParamsMode) =>
  arr.join(mode === 'search' ? ',' : '|');

export const getSearchDataFromParams = (searchStr: string) => {
  const p = new URLSearchParams(searchStr);
  const searchData: any = {};

  Object.entries(searchControllersConfigs).forEach(([key, config]) => {
    const fromParam = config.fromParamHandler({key, p});
    searchData[key] = fromParam ? fromParam : config.defaultValue;
  });

  return searchData;
};



export const toParams = (obj: Params, mode: ParamsMode, searchStr?: string) => {
  const p = new URLSearchParams(searchStr ?? '');

  Object.entries(obj).forEach(([key, value]) => {
    const config = searchControllersConfigs[key];
    if(config)
      return config.toParamHandler({key, value, mode, p});

    if (
      typeof value === 'number' ||
      (typeof value === 'string' && value.length > 0)
    )
      return p.set(key, value as any);

    if (Array.isArray(value) && value.length > 0)
      return p.set(key, transformArr(value, mode));

    if (p.has(key)) p.delete(key);
    // if (mode === 'api' && frontendOnlyParams.includes(_key)) return;
    //
    // const overwrite = findParamOverwrite({
    //   key: _key,
    //   mode,
    //   overwritesArr: apiParamsOverwrites,
    // });
    //
    // const key: string = overwrite ? overwrite : _key;
    //
    // if (mode === 'api' && key === 'ordering') {
    //   const orderingType = orderingTypes.find(o => o.orderingId === value);
    //   if (orderingType) return p.set(key, orderingType.fields.join(','));
    // }
    // if (mode === 'search' && key === 'view' && value === defaultViewId) {
    //   if (p.has(key)) p.delete(key);
    //   return;
    // }


    //
    //
    // if (
    //   typeof value === 'number' ||
    //   (typeof value === 'string' && value.length > 0)
    // )
    //   return p.set(key, value as any);
    //
    // if (Array.isArray(value) && value.length > 0)
    //   return p.set(key, transformArr(value, mode));
    //
    // if (key === 'filters')
    //   return Object.entries(value).forEach(([_filterKey, filterValues]) => {
    //     const filterKeyOverwrite = findParamOverwrite({
    //       key: _filterKey,
    //       mode,
    //       overwritesArr: filters,
    //     });
    //     const filterKey: string = filterKeyOverwrite
    //       ? filterKeyOverwrite
    //       : _filterKey;
    //
    //     if (filterValues.length > 0) {
    //       p.set(filterKey, transformArr(filterValues, mode));
    //     } else if (p.has(filterKey)) p.delete(filterKey);
    //   });
    //
  });
  return p.toString();
};
