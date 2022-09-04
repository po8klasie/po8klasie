import { useEffect } from 'react';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { publicRuntimeConfig } from '../runtimeConfig';

const posthogApiHost = 'https://app.posthog.com';

// https://posthog.com/docs/integrate/third-party/next-js
const usePosthogPageChangeTracker = () => {
  const router = useRouter();

  const { POSTHOG_API_KEY } = publicRuntimeConfig;

  useEffect(() => {
    if (POSTHOG_API_KEY) {
      posthog.init(POSTHOG_API_KEY, { api_host: posthogApiHost });

      const handleRouteChange = () => posthog.capture('$pageview');
      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }

    return () => {};
  }, [router, POSTHOG_API_KEY]);
};

export default usePosthogPageChangeTracker;
