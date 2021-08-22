import { Environment, LocalEnvironment } from './environments/environment';

declare global {
  interface Window {
    config: Readonly<Environment>;
  }
  namespace NodeJS {
    interface ProcessEnv extends LocalEnvironment {
      PUBLIC_URL: string
    }
  }
}
