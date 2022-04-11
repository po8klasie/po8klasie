import { camelCase, isPlainObject } from 'lodash';
import { publicRuntimeConfig } from "../../runtimeConfig";

const camelCaseKeys = (o: Record<string, unknown>): Record<string, unknown> | unknown[] => {
  if (isPlainObject(o)) {
    const n: Record<string, unknown> = {};

    Object.keys(o).forEach((k) => {
      n[camelCase(k)] = camelCaseKeys(o[k] as Record<string, unknown>);
    });

    return n;
  }
  if (Array.isArray(o)) {
    return o.map((i) => camelCaseKeys(i));
  }

  return o;
};

const fetcher = <T>(path: string): Promise<T> =>
  fetch(`${publicRuntimeConfig.API_URL}${path}`)
    .then((res) => res.json())
    .then((res) => camelCaseKeys(res) as T);

export default fetcher;
