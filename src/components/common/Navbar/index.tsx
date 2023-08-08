import React from 'react';

import { NAVBAR_MENU } from '@/constant/navbar';

import * as S from './styled';

export const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      {NAVBAR_MENU.map(({ text, href }, i) => (
        <S.NavbarText to={href} key={i}>
          {text}
        </S.NavbarText>
      ))}
    </S.NavbarContainer>
  );
};
