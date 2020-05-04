import { FilterData, filters } from '../data/filters';

export type Params = Record<string, string | number | any[]>;

export const getPayloadFromParams = (searchStr: string) => {
  const params = new URLSearchParams(searchStr);
  const payload: any = {};

  if (params.has('q')) {
    const query = params.get('q');
    payload.school_name = query;
  }
  if (params.has('page')) {
    payload.page = params.get('page');
  }

  filters.forEach((filter: FilterData) => {
    const param = params.get(filter.fieldId);
    if (param) {
      payload[filter.fieldId] = param
        .split(',')
        .filter(str => filter.choices.find(c => (c.id = str.toLowerCase())));
    }
  });

  return payload;
};

export const toParams = (
  obj: Params,
  mode: 'search' | 'api',
  searchStr?: string,
) => {
  const p = new URLSearchParams(searchStr ?? '');

  Object.entries(obj).forEach(([key, value]) => {
    if (
      key === 'page' &&
      typeof value === 'number' &&
      Number.isInteger(value) &&
      value > 1
    )
      return p.set(key, value as any);

    if (
      typeof value === 'number' ||
      (typeof value === 'string' && value.length > 0)
    )
      return p.set(key, value as any);

    if (Array.isArray(value) && value.length > 0)
      return p.set(key, value.join(mode === 'search' ? ',' : '|'));

    if (p.has(key)) p.delete(key);
  });
  return p.toString();
};
