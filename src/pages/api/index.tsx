import React from 'react';
import { useParams } from 'react-router-dom';

import { API_LIST } from '@/constant';
import { Button, DataBox } from '@/components';
import { toastSuccess } from '@/utils';

import * as S from './styled';

export const ApiPage: React.FC = () => {
  const { apiId } = useParams<{ apiId: string }>();

  const foundApi =
    API_LIST.file.find((api) => api.apiId === `/${apiId}`) ||
    API_LIST.text.find((api) => api.apiId === `/${apiId}`);

  const onCurlCopy = () => {
    toastSuccess('명령어가 복사되었어요.');
    navigator.clipboard.writeText(foundApi?.curl || '');
  };
  return (
    <S.ApiPageContainer>
      <S.ApiPageMethodWrapper>
        <DataBox>{foundApi?.method}</DataBox>
      </S.ApiPageMethodWrapper>
      <S.ApiPageDescription>{foundApi?.description}</S.ApiPageDescription>
      <S.ApiPageCurl>{foundApi?.curl}</S.ApiPageCurl>
      <Button isPrimary onClick={onCurlCopy}>
        명령어 복사
      </Button>
    </S.ApiPageContainer>
  );
};
