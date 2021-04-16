import { MatomoProvider, createInstance, useMatomo } from '@datapunt/matomo-tracker-react';
import React, { FC, useEffect } from 'react';
import { TrackPageViewParams } from '@datapunt/matomo-tracker-react/lib/types';
import { environment } from '../environments/environment';

const { MATOMO_BASE_URL, MATOMO_SITE_ID } = environment;

const instance = createInstance({
  urlBase: MATOMO_BASE_URL, // include trailing slash
  siteId: parseInt(MATOMO_SITE_ID, 10),
  disabled: !MATOMO_BASE_URL || !MATOMO_SITE_ID,
  configurations: {
    disableCookies: true,
  },
});

export const AnalyticsProvider: FC = ({ children }) => (
  <MatomoProvider value={instance}>{children}</MatomoProvider>
);

export const useBasicPageViewTracker = (enable = true, params: TrackPageViewParams = {}): void => {
  const { trackPageView } = useMatomo();
  useEffect(
    () => {
      if (enable) trackPageView(params);
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );
};
