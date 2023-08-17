import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetList } from '@/hooks';
import { DataBox, DataList, FileDetails } from '@/components';
import { getDate, getFileSize } from '@/utils';

import * as S from './styled';

export const ListPage: React.FC = () => {
  const { data, isLoading } = useGetList();

  const navigate = useNavigate();

  const onNavigate = (id: string, type: string) => {
    navigate(`/dl/${id}?type=${type}`);
  };

  if (isLoading || (!data?.data.files && !data?.data.texts)) {
    return (
      <S.ListPageContainer>
        <h1>loading..</h1>
      </S.ListPageContainer>
    );
  }

  return (
    <>
      <S.ListPageContainer>
        <S.ListPageListWrapper>
          <DataList type="file" dataList={data.data.files} />
          <DataList type="text" dataList={data.data.texts} />
        </S.ListPageListWrapper>
      </S.ListPageContainer>
      <S.ListPageBoxShadow />
    </>
  );
};
