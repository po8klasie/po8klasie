module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#9D54BF',
        primaryLight: '#FCF8FE',
        dark: '#222122',
        light: '#DCDCDC',
      },
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
