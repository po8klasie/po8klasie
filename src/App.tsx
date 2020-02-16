import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './styling/theme';
import Routes from './Routes';
import GlobalStyles from './styling/GlobalStyles';
import configureStore from './store/configureStore';
import { Provider as StoreProvider } from 'react-redux';

const store = configureStore();

const App: React.FC = () => {
  return (
    <>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Routes />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
};

export default App;
