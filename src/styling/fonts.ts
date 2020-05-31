export const setupFonts = `
    /* ibm-plex-sans-700 - latin-ext_latin */
    @font-face {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 700;
        src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'),
             url(${require('../assets/fonts/IBMPlexSans-Bold.woff2')}) format('woff2')
    }
    
    /* open-sans-regular - latin-ext_latin */
    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local('Open Sans Regular'), local('OpenSans-Regular'),
             url(${require('../assets/fonts/OpenSans-Regular.woff2')}) format('woff2')
    }
`;
