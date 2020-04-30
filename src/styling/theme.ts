export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
    light: string;
    text: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#965BD4',
    primaryLight: '#BA98FF',
    secondary: '#82EAAC',
    light: '#F2F2F2',
    text: '#272727'
  },
  fonts: {
    primary: 'Signika',
    secondary: 'Roboto Condensed',
  },
};
//#BA97FF
export default theme;
