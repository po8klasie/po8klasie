import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { setupSentry } from './utils/sentry';

setupSentry();

const rootElement = document.querySelector('#root');

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);

serviceWorker.unregister();
