/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

import * as S from './styled';
export interface SkeletonUIBoxProps {
  randomWidth: string;
}

export const SkeletonUIBox: React.FC<SkeletonUIBoxProps> = ({ randomWidth }) => {
  return (
    <S.SkeletonUIBoxElement
      css={css`
        min-width: ${randomWidth};
      `}
    />
  );
};
