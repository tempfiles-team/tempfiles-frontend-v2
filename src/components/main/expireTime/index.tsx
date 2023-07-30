import React from 'react';

import { ExpireTimeValues } from '@/pages';
import { Button } from '@/components/common';

import * as S from './styled';

export interface ExpireTimeProps {
  onExpireTimeClick: (type: string, value: number) => void;
  expireTime: ExpireTimeValues;
}

export const ExpireTime: React.FC<ExpireTimeProps> = ({ onExpireTimeClick, expireTime }) => {
  const onMinuteClick = (min: number) => {
    onExpireTimeClick('minute', expireTime.minute + min);
  };

  return (
    <S.ExpireTimeContainer>
      <S.ExpireTimeTextWrapper>
        <S.ExpireTimeText>
          {expireTime.minute}분, {expireTime.hour}시간, {expireTime.day}일
        </S.ExpireTimeText>
      </S.ExpireTimeTextWrapper>
      <Button onClick={() => onMinuteClick(1)}>+1분</Button>
      <Button onClick={() => onMinuteClick(10)}>+10분</Button>
      <Button onClick={() => onExpireTimeClick('hour', expireTime.hour + 1)}>+1시간</Button>
      <Button onClick={() => onExpireTimeClick('day', expireTime.day + 1)}>+1일</Button>
    </S.ExpireTimeContainer>
  );
};
