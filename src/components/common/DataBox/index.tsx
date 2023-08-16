import React from 'react';

import * as S from './styled';
export interface DataBoxProps {
  children: React.ReactNode;
}

export const DataBox: React.FC<DataBoxProps> = ({ children }) => {
  return <S.DataBoxElement>{children}</S.DataBoxElement>;
};
