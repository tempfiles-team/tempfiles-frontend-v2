import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Password } from '@/components';
import { useGetItem } from '@/hooks';

import * as S from './styled';

export const CheckPwPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [password, setPassword] = useState<string>('');

  const { data, isLoading } = useGetItem({
    type: 'file',
    options: {
      id: id ? id : '',
    },
    isCheckPwPage: true,
  });

  //   console.log(data);
  return (
    <S.CheckPwPageContainer>
      <Password setPassword={setPassword} password={password} animate="visible" />
    </S.CheckPwPageContainer>
  );
};
