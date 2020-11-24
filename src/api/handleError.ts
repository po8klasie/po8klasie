import * as Sentry from '@sentry/react';
import { AxiosError } from 'axios';

const handleError = (error: AxiosError): void => {
  if (error.response && `${error.response.status}`.charAt(0) === '5')
    Sentry.captureException(error.message, error.toJSON());
};

export default handleError;
