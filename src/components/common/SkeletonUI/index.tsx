import React from 'react';

import * as S from './styled';

export interface SkeletonUIProps {
  width: string;
  height: string;
  margin: string;
}

export const SkeletonUI: React.FC<SkeletonUIProps> = ({ width, height, margin }) => {
  return <S.SkeletonUIElement width={width} height={height} margin={margin} />;
};
