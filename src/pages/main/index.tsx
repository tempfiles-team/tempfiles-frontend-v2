import React from 'react';

import { Text } from '@/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <Text.Column>
        <Text fontSize="3.6rem" fontWeight={600}>
          TEMPFILES
        </Text>
        <Text fontSize="1.6rem" fontWeight={600}>
          간단한 파일 공유 서비스
        </Text>
      </Text.Column>
    </S.MainPageContainer>
  );
};
