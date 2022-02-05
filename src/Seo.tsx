import { DefaultSeo as DefaultNextSeo, DefaultSeoProps } from 'next-seo';
import { environment } from './environments/environment';

export const defaultSeoConfig: DefaultSeoProps = {
  dangerouslySetAllPagesToNoIndex: environment.APP_ENVIRONMENT !== 'production', // do not index test server
  defaultTitle: 'po8klasie - wyszukiwarka szkół średnich',
  titleTemplate: '%s | po8klasie',
  twitter: {
    handle: '@po8klasie',
    cardType: 'summary_large_image',
  },
};

export const DefaultSeo = () => <DefaultNextSeo {...defaultSeoConfig} />;
