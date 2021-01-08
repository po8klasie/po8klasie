import { css, keyframes } from '@emotion/core';

export const shimmerAnimation = keyframes`
    0%, 100%{
        background-position: -100% 0;
    }
    50%{
        background-position: 100% 0;
    }
`;
export const createPlaceholderStyles = (): any => css`
  animation: ${shimmerAnimation} 2s linear 0s infinite;
  background: darkgray;
  background: linear-gradient(to right, white, #eee 20%, white);
  background-size: 200% 100%;
  border-radius: 10px;
  display: block;
`;
