import React from 'react';

import * as S from './styled';

export interface ButtonProps {
  children: React.ReactNode;
  isPrimary: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, isPrimary, onClick }) => {
  return (
    <S.ButtonElement variant="contained" isPrimary={isPrimary} onClick={onClick}>
      {children}
    </S.ButtonElement>
  );
};
