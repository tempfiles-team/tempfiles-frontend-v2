import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetList } from '@/hooks';
import { DataBox, FileDetails } from '@/components';
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
          {data?.data.files.map((file) => {
            const uploadDate = getDate(file.uploadDate);
            const fileSize = getFileSize(file.size);
            return (
              <DataBox onClick={() => onNavigate(file.id, 'file')} key={file.id}>
                <FileDetails
                  fileData={file}
                  fileSize={fileSize}
                  filenameLength={file.filename.length}
                  uploadDate={uploadDate}
                />
              </DataBox>
            );
          })}
          {data?.data.texts.map((text) => {
            const uploadDate = getDate(text.uploadDate);
            return (
              <DataBox onClick={() => onNavigate(text.id, 'file')} key={text.id}>
                {text.data} / {text.data.length}글자 / 업로드된 날짜: {uploadDate.year}-
                {uploadDate.month}-{uploadDate.day}
              </DataBox>
            );
          })}
        </S.ListPageListWrapper>
      </S.ListPageContainer>
      <S.ListPageBoxShadow />
    </>
  );
};
