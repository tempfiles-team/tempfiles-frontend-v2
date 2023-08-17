import React from 'react';

import * as S from './styled';

export interface MainPageButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isTertiary?: boolean;
}

export const MainPageButton: React.FC<MainPageButtonProps> = ({
  children,
  onClick,
  isTertiary,
}) => (
  <S.ButtonElement onClick={onClick} variant="contained" isTertiary={isTertiary}>
    {children}
  </S.ButtonElement>
);
