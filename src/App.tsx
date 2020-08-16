import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import theme from './styling/theme';
import Routes from './Routes';
import { globalStyles } from './styling/globalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
