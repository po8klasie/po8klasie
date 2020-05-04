import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import theme from './theme';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: IBM Plex Sans;
      }
      html,
      body,
      #root,
      #root > div {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Open Sans;
      }
      a {
        color: ${theme.colors.primary};
        font-weight: bold;
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
