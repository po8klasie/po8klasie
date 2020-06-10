import { css, keyframes } from '@emotion/core';

export const shimmerAnimation = keyframes`
    0%, 100%{
        background-position: -100% 0;
    }
    50%{
        background-position: 100% 0;
    }
`;
export const createPlaceholderStyles = () => css`
  animation: ${shimmerAnimation} 2s linear 0s infinite;
  background: #a9a9a9;
  background: linear-gradient(to right, #fff, #eee 20%, #fff);
  background-size: 200% 100%;
  border-radius: 10px;
  display: block;
`;
