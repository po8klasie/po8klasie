/// <reference types="react-scripts" />
import { Environment, LocalEnvironment } from './environments/environment';

declare global {
  interface Window {
    config: Readonly<Environment>;
  }
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends LocalEnvironment {}
  }
}
