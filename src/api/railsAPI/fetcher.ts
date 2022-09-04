import { publicRuntimeConfig } from '../../runtimeConfig';

const fetcher = <T>(path: string): Promise<T> =>
  fetch(`${publicRuntimeConfig.API_URL}${path}`).then((res) => res.json());

export default fetcher;
