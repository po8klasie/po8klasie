import React from 'react';
import * as Sentry from '@sentry/react';
import {ThemeProvider} from 'emotion-theming';
import {Global} from '@emotion/core';
import {SWRConfig} from "swr";
import handleError from "./api/handleError";
import theme from './styling/theme';
import Routes from './Routes';
import {globalStyles} from './styling/globalStyles';

const swrConfig = {
    onError: handleError
}

const App: React.FC = () => {
    return (
        <Sentry.ErrorBoundary fallback={"An error has occurred"}>
            <ThemeProvider theme={theme}>
                <Global styles={globalStyles}/>
                <SWRConfig value={swrConfig}>
                    <Routes/>
                </SWRConfig>
            </ThemeProvider>
        </Sentry.ErrorBoundary>
    );
};

export default App;
