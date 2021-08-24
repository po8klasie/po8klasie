import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setupSentry } from './utils/externalServices';

setupSentry();

export default function NextIndexWrapper() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

serviceWorker.unregister();
