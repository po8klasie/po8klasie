const colors = require('tailwindcss/colors');

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
      // appBg: '#E2E5E6',
      red: {
        "500": "red"
      },
      lighten: '#E2E5E6'
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
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
