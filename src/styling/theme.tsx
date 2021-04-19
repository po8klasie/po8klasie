import {FC} from "react";

export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
    light: string;
    dark: string;
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
    dark: '#707070',
    text: '#272727',
  },
  fonts: {
    primary: 'IBM Plex Sans',
    secondary: 'Open Sans',
  },
};

export default theme;
