import React from 'react';

import { useGetList } from '@/hooks';
import { DataList } from '@/components';

import * as S from './styled';

export const ListPage: React.FC = () => {
  const { data, isLoading } = useGetList();

  const fileData = data?.data.files;
  const textData = data?.data.texts;

  if (isLoading || !fileData || !textData) {
    return (
      <S.ListPageContainer>
        <h1>loading..</h1>
      </S.ListPageContainer>
    );
  }

  return (
    <>
      <S.ListPageContainer>
        {fileData.length !== 0 || textData.length !== 0 ? (
          <S.ListPageListWrapper>
            <DataList type="file" dataList={fileData} />
            <DataList type="text" dataList={textData} />
          </S.ListPageListWrapper>
        ) : (
          <h1>업로드된 파일이나 텍스트가 없어요</h1>
        )}
      </S.ListPageContainer>
      <S.ListPageBoxShadow />
    </>
  );
};
