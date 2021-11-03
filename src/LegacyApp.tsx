import React from 'react';
import { Global } from '@emotion/core';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import LegacyRoutes from './LegacyRoutes';
import globalStyles from './styling/globalStyles';
import Providers from './Providers';

const LegacyApp: React.FC = () => {
  const { enableLinkTracking } = useMatomo();
  enableLinkTracking();

  return (
    <Providers>
      <Global styles={globalStyles} />
      <LegacyRoutes />
    </Providers>
  );
};

export default LegacyApp;
