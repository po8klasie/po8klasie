import { searchControllersConfigs } from '../data/searchControllers';

export type Params = Record<string, string | number | any[]>;
export type ParamsMode = 'api' | 'search';

export const transformArr = (arr: any[], mode: ParamsMode) =>
  arr.join(mode === 'search' ? ',' : '|');

export const getSearchDataFromParams = (searchStr: string) => {
  const p = new URLSearchParams(searchStr);
  const searchData: any = {};

  Object.entries(searchControllersConfigs).forEach(([key, config]) => {
    const fromParam = config.fromParamHandler({ key, p });
    searchData[key] = fromParam ? fromParam : config.defaultValue;
  });

  return searchData;
};

export const toParams = (obj: Params, mode: ParamsMode, searchStr?: string) => {
  const p = new URLSearchParams(searchStr ?? '');

  Object.entries(obj).forEach(([key, value]) => {
    const config = searchControllersConfigs[key];
    if (config) return config.toParamHandler({ key, value, mode, p });

    if (
      typeof value === 'number' ||
      (typeof value === 'string' && value.length > 0)
    )
      return p.set(key, value as any);

    if (Array.isArray(value) && value.length > 0)
      return p.set(key, transformArr(value, mode));

    if (p.has(key)) p.delete(key);
  });
  return p.toString();
};
