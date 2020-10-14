import React from 'react';
import * as Sentry from '@sentry/react';
import {ThemeProvider} from 'emotion-theming';
import {Global} from '@emotion/core';
import theme from './styling/theme';
import Routes from './Routes';
import {globalStyles} from './styling/globalStyles';

const App: React.FC = () => {
    return (
        <Sentry.ErrorBoundary fallback={"An error has occurred"}>
            <ThemeProvider theme={theme}>
                <Global styles={globalStyles}/>
                <Routes/>
            </ThemeProvider>
        </Sentry.ErrorBoundary>
    );
};

export default App;
