import React from 'react';

import { Navbar, Text } from '@/components';

import * as S from './styled';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <S.DefaultLayoutContainer>
      <S.DefaultLayoutWrapper>
        <Text.Column>
          <Text fontSize="3.6rem" fontWeight={600}>
            TMPF
          </Text>
          <Text fontSize="1.6rem" fontWeight={600}>
            간단한 파일 공유 서비스
          </Text>
        </Text.Column>
        {children}
      </S.DefaultLayoutWrapper>
      <Navbar />
    </S.DefaultLayoutContainer>
  );
};
