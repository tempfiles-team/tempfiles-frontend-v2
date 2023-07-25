import { css } from '@emotion/react';

import { reset } from './reset';
import { colors } from './colors';

export const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
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
  }

  #app,
  #root,
  #__next {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.03em;
  }
`;
