import { environment as devEnvironment } from "./environment.dev";
import { environment as prodEnvironment } from "./environment.prod";

export interface Environment {
    API_URL: string
    PUBLIC_SENTRY_DSN: string
}

export const isProduction = process.env.NODE_ENV === 'production';

export const environment: Environment = isProduction ? prodEnvironment : devEnvironment;
