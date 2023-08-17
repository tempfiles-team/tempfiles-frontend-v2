import React from 'react';

import { ExpireTimeValues } from '@/pages';
import { MainPageButton, OptionSection } from '@/components';

import * as S from './styled';

export interface ExpireTimeProps {
  onExpireTimeClick: (type: string, value: number) => void;
  expireTime: ExpireTimeValues;
  animate: 'visible' | 'hidden';
}

export const ExpireTime: React.FC<ExpireTimeProps> = ({
  onExpireTimeClick,
  expireTime,
  animate,
}) => {
  /** 시간 초기화 함수 */
  const onResetClick = () => {
    onExpireTimeClick('minute', 0);
    onExpireTimeClick('hour', 0);
    onExpireTimeClick('day', 0);
  };

  return (
    <OptionSection
      animate={animate}
      text={`${expireTime.minute}분, ${expireTime.hour}시간, ${expireTime.day}일`}
    >
      <S.ExpireTimeOptionContainer>
        <MainPageButton onClick={() => onExpireTimeClick('minute', expireTime.minute + 10)}>
          +10분
        </MainPageButton>
        <MainPageButton onClick={() => onExpireTimeClick('hour', expireTime.hour + 1)}>
          +1시간
        </MainPageButton>
        <MainPageButton onClick={() => onExpireTimeClick('day', expireTime.day + 1)}>
          +1일
        </MainPageButton>
        <MainPageButton isTertiary={true} onClick={onResetClick}>
          초기화
        </MainPageButton>
      </S.ExpireTimeOptionContainer>
    </OptionSection>
  );
};
