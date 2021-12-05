module.exports = {
  purge: ['./src/components/website/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#9D54BF',
      primaryLight: '#FCF8FE',
      dark: '#222122',
      light: '#DCDCDC',
      white: '#FFFFFF',
    },
    extend: {
      width: {
        container: '80vw',
        narrowContainer: '60vw',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
};
