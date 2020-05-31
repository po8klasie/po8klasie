import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import {Global} from "@emotion/core";
import theme from './styling/theme';
import Routes from './Routes';
import configureStore from './store/configureStore';
import { Provider as StoreProvider } from 'react-redux';
import {globalStyles} from "./styling/globalStyles";


const store = configureStore();

const App: React.FC = () => {
  return (
    <>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Routes />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default App;
