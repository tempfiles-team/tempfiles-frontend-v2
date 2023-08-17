/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

import * as S from './styled';

export interface SkeletonUIProps {
  width: string;
  height: string;
  margin: string;
}

export const SkeletonUI: React.FC<SkeletonUIProps> = ({ width, height, margin }) => {
  return (
    <S.SkeletonUIElement
      css={css`
        min-width: ${width};
        min-height: ${height};
        margin: ${margin};
      `}
    />
  );
};
