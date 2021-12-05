import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { init as initMatomo } from "@socialgouv/matomo-next";
import { environment, isEnvVarEmpty } from "../environments/environment";

const configScript = `
window.config = {
  GRAPHQL_ENDPOINT: '\${GRAPHQL_ENDPOINT}',
  PUBLIC_SENTRY_DSN: '\${PUBLIC_SENTRY_DSN}',
  MATOMO_BASE_URL: '\${MATOMO_BASE_URL}',
  MATOMO_SITE_ID: '\${MATOMO_SITE_ID}',
}
`;

class Document extends NextDocument {
  componentDidMount() {
    if(!isEnvVarEmpty('MATOMO_BASE_URL') && !isEnvVarEmpty('MATOMO_SITE_ID'))
      initMatomo({
        url: environment.MATOMO_BASE_URL,
        siteId: environment.MATOMO_SITE_ID,
      });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Najprostsza i najszybsza wyszukiwarka szkół średnich" />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/logo.png`} />
          <link rel="apple-touch-icon" href={`${process.env.PUBLIC_URL}/logo.png`} />
          <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{ __html: configScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
