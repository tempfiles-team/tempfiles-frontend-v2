import React from 'react';

import { ExpireTimeValues } from '@/pages';

import * as S from './styled';

export interface ExpireTimeProps {
  onExpireTimeClick: (type: string, value: number) => void;
  expireTime: ExpireTimeValues;
}

export const ExpireTime: React.FC<ExpireTimeProps> = ({ onExpireTimeClick, expireTime }) => {
  return (
    <S.ExpireTimeContainer>
      <span>
        {expireTime.minute}분, {expireTime.hour}시간, {expireTime.day}일
      </span>
      <h1 onClick={() => onExpireTimeClick('minute', expireTime.minute + 1)}>+1min</h1>
      <h1 onClick={() => onExpireTimeClick('minute', expireTime.minute + 10)}>+10min</h1>
      <h1 onClick={() => onExpireTimeClick('hour', expireTime.hour + 1)}>+1hour</h1>
      <h1 onClick={() => onExpireTimeClick('day', expireTime.day + 1)}>+1day</h1>
    </S.ExpireTimeContainer>
  );
};
