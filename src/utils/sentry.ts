import * as Sentry from "@sentry/browser";
import {environment, isProduction} from "../environments/environment";

const PUBLIC_SENTRY_DSN_TEMPLATE = '${PUBLIC_SENTRY_DSN}';

export const setupSentry = () => {
    if (isProduction && environment.PUBLIC_SENTRY_DSN && environment.PUBLIC_SENTRY_DSN !== PUBLIC_SENTRY_DSN_TEMPLATE) {
        Sentry.init({ dsn: environment.PUBLIC_SENTRY_DSN });
    }
};
