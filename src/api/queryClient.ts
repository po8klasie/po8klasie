import { publicRuntimeConfig } from '../runtimeConfig';
import { QueryClientConfig, QueryKey } from '@tanstack/react-query';

interface FetcherArgs {
  queryKey: QueryKey;
}

const fetcher = <T>({ queryKey }: FetcherArgs): Promise<T> =>
  fetch(`${publicRuntimeConfig.API_URL}${queryKey[0]}`).then((res) => res.json());

export const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      queryFn: fetcher,
      refetchIntervalInBackground: false,
    },
  },
};
