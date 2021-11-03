import React from 'react';
import LegacyApp from './LegacyApp';
import * as serviceWorker from './serviceWorker';
import { setupSentry } from './utils/externalServices';

setupSentry();

export default function NextIndexWrapper() {
  return (
    <React.StrictMode>
      <LegacyApp />
    </React.StrictMode>
  );
}

serviceWorker.unregister();
