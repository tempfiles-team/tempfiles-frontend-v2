import React from 'react';

import * as S from './styled';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <S.ButtonElement onClick={onClick}>{children}</S.ButtonElement>;
};
