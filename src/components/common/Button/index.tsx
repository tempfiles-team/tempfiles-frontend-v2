import React from 'react';

import * as S from './styled';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isTertiary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, isTertiary }) => {
  return (
    <S.ButtonElement onClick={onClick} variant="contained" isTertiary={isTertiary}>
      {children}
    </S.ButtonElement>
  );
};
