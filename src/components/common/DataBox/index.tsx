import React from 'react';

import * as S from './styled';
export interface DataBoxProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const DataBox: React.FC<DataBoxProps> = ({ children, onClick }) => {
  return <S.DataBoxElement onClick={onClick}>{children}</S.DataBoxElement>;
};
