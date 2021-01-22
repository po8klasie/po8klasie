import React from 'react';
import ReactDom from 'react-dom';
import * as Sentry from '@sentry/react';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {setupSentry} from "./utils/sentry";

// setupSentry();
Sentry.init({
  dsn: 'https://70628be0327a41fcaebd1062c1a19758@o383740.ingest.sentry.io/5219529',
  debug: true,
});

Sentry.captureException(new Error('Test error'));

const rootElement = document.querySelector('#root');

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);

serviceWorker.unregister();
