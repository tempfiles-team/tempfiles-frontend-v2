import React from 'react';

import { useGetList } from '@/hooks';
import { Button, DataList, SkeletonUIBox } from '@/components';

import * as S from './styled';

export const ListPage: React.FC = () => {
  const { data, isLoading } = useGetList();

  const SkeletonUIRandomWidth = ['50', '55', '60', '65', '70', '75', '80'];

  const randomSkeletonWidths = Array.from(
    { length: 7 },
    () => SkeletonUIRandomWidth[Math.floor(Math.random() * 6)],
  );

  if (isLoading || !data?.data || !data?.data.files || !data?.data.texts) {
    return (
      <S.ListPageContainer>
        {randomSkeletonWidths.map((width, i) => (
          <SkeletonUIBox key={i} randomWidth={width} />
        ))}
      </S.ListPageContainer>
    );
  }

  const fileData = data.data.files;
  const textData = data.data.texts;

  return (
    <>
      <S.ListPageContainer>
        {fileData.length !== 0 || textData.length !== 0 ? (
          <S.ListPageListWrapper>
            <DataList type="file" dataList={fileData} />
            <DataList type="text" dataList={textData} />
          </S.ListPageListWrapper>
        ) : (
          <>
            <S.ListPageText>업로드된 파일이나 텍스트가 없어요.</S.ListPageText>
            <Button isPrimary={true} onClick={() => window.location.replace('/')}>
              &larr; 업로드하러 가기
            </Button>
          </>
        )}
      </S.ListPageContainer>
      <S.ListPageBoxShadow />
    </>
  );
};
