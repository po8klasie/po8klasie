import React, { FC } from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed|Signika&display=swap&subset=latin-ext');
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: Signika;
      }
      * {
        font-family: Roboto Condensed;
      }
      html,
      body,
      #root,
      #root > div {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default GlobalStyles;
