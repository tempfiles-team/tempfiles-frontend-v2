import React from 'react';

import { ExpireTimeValues } from '@/pages';
import { Button, OptionSection } from '@/components';

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
        <Button onClick={() => onExpireTimeClick('minute', expireTime.minute + 10)}>+10분</Button>
        <Button onClick={() => onExpireTimeClick('hour', expireTime.hour + 1)}>+1시간</Button>
        <Button onClick={() => onExpireTimeClick('day', expireTime.day + 1)}>+1일</Button>
        <Button isTertiary={true} onClick={onResetClick}>
          초기화
        </Button>
      </S.ExpireTimeOptionContainer>
    </OptionSection>
  );
};
