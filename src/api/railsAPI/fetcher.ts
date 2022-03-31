import { camelCase, isPlainObject } from 'lodash';

const camelCaseKeys = (o: Record<string, unknown>): Record<string, unknown> | unknown[] => {
  if (isPlainObject(o)) {
    const n: Record<string, unknown> = {};

    Object.keys(o).forEach((k) => {
      n[camelCase(k)] = camelCaseKeys(o[k] as Record<string, unknown>);
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => camelCaseKeys(i));
  }

  return o;
};

const fetcher = <T>(url: string): Promise<T> =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => camelCaseKeys(res) as T);

export default fetcher;
