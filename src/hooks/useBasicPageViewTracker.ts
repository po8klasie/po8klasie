import { useEffect } from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { TrackPageViewParams } from '@datapunt/matomo-tracker-react/lib/types';

const useBasicPageViewTracker = (enable = true, params: TrackPageViewParams = {}): void => {
  const { trackPageView } = useMatomo();
  useEffect(
    () => {
      if (enable) trackPageView(params);
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );
};

export default useBasicPageViewTracker;
