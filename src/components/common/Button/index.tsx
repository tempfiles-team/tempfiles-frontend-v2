import React from 'react';

import * as S from './styled';

export interface ButtonProps {
  children: React.ReactNode;
  isPrimary: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, isPrimary }) => {
  return (
    <S.ButtonElement variant="contained" isPrimary={isPrimary}>
      {children}
    </S.ButtonElement>
  );
};
