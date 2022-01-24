import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

const configScript = `
window.config = {
  GRAPHQL_ENDPOINT: '\${GRAPHQL_ENDPOINT}',
  PUBLIC_SENTRY_DSN: '\${PUBLIC_SENTRY_DSN}',
  MATOMO_BASE_URL: '\${MATOMO_BASE_URL}',
  MATOMO_SITE_ID: '\${MATOMO_SITE_ID}',
}
`;

class Document extends NextDocument {
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Source+Sans+Pro&display=swap"
            rel="stylesheet"
          />
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
