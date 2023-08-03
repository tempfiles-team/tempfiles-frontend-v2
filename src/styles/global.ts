import { css } from '@emotion/react';

import { reset } from './reset';
import { colors } from './colors';

export const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
    color: ${colors.white};
  }

  html {
    font-size: 10px;
  }

  html,
  body,
  #app,
  #root,
  #__next {
    width: 100%;
    height: 100%;
    color: ${colors.white};
    background-color: ${colors.background};
    overflow: hidden;
  }

  #app,
  #root,
  #__next {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: -0.03em;
  }
  html,
  body {
    @media screen and (max-width: 2600px) and (min-width: 2000px) {
      font-size: 18px;
    }

    @media screen and (max-width: 2000px) and (min-width: 1000px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1000px) and (min-width: 700px) {
      font-size: 14px;
    }

    @media screen and (max-width: 700px) and (min-width: 500px) {
      font-size: 12px;
    }
    @media screen and (max-width: 500px) and (min-width: 300px) {
      font-size: 14px;
    }
  }
`;
