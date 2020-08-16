import React from 'react';
import ReactDom from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (
  process.env.NODE_ENV &&
  process.env.NODE_ENV === 'production' &&
  process.env.REACT_APP_SENTRY_DSN
) {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });
}

const rootElement = document.querySelector('#root');

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);

serviceWorker.unregister();
