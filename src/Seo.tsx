import { DefaultSeo as DefaultNextSeo, DefaultSeoProps } from 'next-seo';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

// public publicRuntimeConfig is not available in next error pages
const APP_ENVIRONMENT = publicRuntimeConfig ? publicRuntimeConfig.APP_ENVIRONMENT : '';

export const defaultSeoConfig: DefaultSeoProps = {
  dangerouslySetAllPagesToNoIndex: APP_ENVIRONMENT !== 'production', // do not index test server
  defaultTitle: 'po8klasie - wyszukiwarka szkół średnich',
  titleTemplate: '%s | po8klasie',
  twitter: {
    handle: '@po8klasie',
    cardType: 'summary_large_image',
  },
};

export const DefaultSeo = () => <DefaultNextSeo {...defaultSeoConfig} />;
