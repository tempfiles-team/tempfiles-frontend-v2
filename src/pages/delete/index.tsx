import React from 'react';

import { Button } from '@/components';
import { useDelete, useGetInfo } from '@/hooks';

import * as S from './styled';

export const DeletePage: React.FC = () => {
  const { id, type } = useGetInfo();
  const { mutate } = useDelete();
  const onDeleteClick = () => {
    mutate({ id: id ? id : '', type });
  };
  return (
    <S.DeletePageContainer>
      <S.DeletePageMainText>
        업로드된 {type === 'text' ? '텍스트를' : '파일을'} 서버에서 삭제하시겠습니까?
      </S.DeletePageMainText>
      <S.DeletePageButtonContainer>
        <Button isPrimary onClick={() => onDeleteClick}>
          아니요
        </Button>
        <Button isPrimary={false} onClick={onDeleteClick}>
          네
        </Button>
      </S.DeletePageButtonContainer>
    </S.DeletePageContainer>
  );
};
