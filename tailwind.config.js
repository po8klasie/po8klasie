// https://css-tricks.com/snippets/css/system-font-stack/
const systemFontStack =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#9D54BF',
      primaryBg: '#F5E8FC',
      primaryLight: '#FCF8FE',
      dark: '#222122',
      gray: '#626262',
      light: '#DCDCDC',
      white: '#FFFFFF',
      appBg: '#FBFBFB',
      red: {
        '500': 'red',
      },
      lighten: '#E2E5E6',
    },
    fontFamily: {
      primary: `Jost, ${systemFontStack}`,
      secondary: `Source Sans Pro, ${systemFontStack}`,
    },
    extend: {
      width: {
        container: '80vw',
        wideContainer: 'calc(100% - 4rem)',
        narrowContainer: '60vw',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
