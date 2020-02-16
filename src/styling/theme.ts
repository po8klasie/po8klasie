export interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
}

const theme: Theme = {
  colors: {
    primary: 'purple',
    secondary: 'black',
  },
  fonts: {
    primary: 'Signika',
    secondary: 'Roboto Condensed',
  },
};

export default theme;
