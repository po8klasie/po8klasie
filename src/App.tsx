import React from 'react';
import { Global } from '@emotion/core';
import Routes from './Routes';
import globalStyles from './styling/globalStyles';
import Providers from './Providers';
import { useMatomo } from '@datapunt/matomo-tracker-react';

const App: React.FC = () => {
  const { enableLinkTracking } = useMatomo();
  enableLinkTracking();

  return (
    <Providers>
      <Global styles={globalStyles} />
      <Routes />
    </Providers>
  );
};

export default App;
