import React from 'react';

import { Navbar, Text } from '@/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <Text.Column>
        <Text fontSize="3.6rem" fontWeight={600}>
          TMPF
        </Text>
        <Text fontSize="1.6rem" fontWeight={600}>
          간단한 파일 & 텍스트 공유 서비스
        </Text>
      </Text.Column>
      <Navbar />
    </S.MainPageContainer>
  );
};
