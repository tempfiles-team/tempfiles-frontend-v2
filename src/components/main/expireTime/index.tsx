import React from 'react';

import { ExpireTimeValues } from '@/pages';

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
      <S.ExpireTimeText>
        {expireTime.minute}분, {expireTime.hour}시간, {expireTime.day}일
      </S.ExpireTimeText>
      <S.ExpireTimeOptionButton onClick={() => onMinuteClick(1)}>+1분</S.ExpireTimeOptionButton>
      <S.ExpireTimeOptionButton onClick={() => onMinuteClick(10)}>+10분</S.ExpireTimeOptionButton>
      <S.ExpireTimeOptionButton onClick={() => onExpireTimeClick('hour', expireTime.hour + 1)}>
        +1시간
      </S.ExpireTimeOptionButton>
      <S.ExpireTimeOptionButton onClick={() => onExpireTimeClick('day', expireTime.day + 1)}>
        +1일
      </S.ExpireTimeOptionButton>
    </S.ExpireTimeContainer>
  );
};
