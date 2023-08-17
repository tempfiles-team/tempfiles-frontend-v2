import React from 'react';

import { useGetList } from '@/hooks';
import { DataList } from '@/components';

import * as S from './styled';

export const ListPage: React.FC = () => {
  const { data, isLoading } = useGetList();

  if (isLoading || !data?.data.files || !data?.data.texts) {
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
