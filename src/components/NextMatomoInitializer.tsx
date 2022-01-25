import React, { FC, useEffect } from 'react';
import { environment } from '../environments/environment';
import { init as initMatomo } from '@socialgouv/matomo-next';

const NextMatomoInitializer: FC = () => {
  useEffect(() => {
    if (environment.MATOMO_BASE_URL && environment.MATOMO_SITE_ID)
      initMatomo({
        url: environment.MATOMO_BASE_URL,
        siteId: environment.MATOMO_SITE_ID,
      });
  }, []);
  return null;
};

export default NextMatomoInitializer;
