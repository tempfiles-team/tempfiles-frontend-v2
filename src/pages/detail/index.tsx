import React, { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useGetItem, useGetWindowSize } from '@/hooks';
import { Button, SkeletonUI } from '@/components';
import { getDate, getExpireTime, getFileSize } from '@/utils';
import { GetFileResponse, GetTextResponse } from '@/api';

import * as S from './styled';

type ItemType = 'file' | 'text';

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const type = search.split('=')[1] as ItemType;
  const { windowSize } = useGetWindowSize();
  const contentRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useGetItem({
    type,
    options: {
      id,
    },
  });

  if (isLoading || !data) {
    return (
      <>
        <SkeletonUI width="100%" height="3rem" margin="3rem 0px 0px 0px" />
        <SkeletonUI width="80%" height="2.8rem" margin="0" />
      </>
    );
  }

  const { expireTime, downloadLimit } = data.data;
  const textData = data.data as GetTextResponse;
  const fileData = data.data as GetFileResponse;
  const expireDate = getExpireTime(expireTime);
  const uploadDate = getDate(data.data.uploadDate);
  const fileSize = getFileSize(fileData.size);
  const filenameLength = fileData.filename.length;

  const renderFileDetails = () => {
    if (windowSize < 550 && filenameLength <= 18) {
      return (
        <>
          {fileData.filename} / {fileSize} <br />
          업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
        </>
      );
    } else if (
      (windowSize < 1180 && windowSize > 550 && filenameLength <= 46 && filenameLength >= 18) ||
      (windowSize < 1200 && filenameLength > 46)
    ) {
      return (
        <>
          {fileData.filename}
          <br />
          크기: {fileSize} / 업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
        </>
      );
    } else {
      return (
        <>
          파일 이름: {fileData.filename} / 크기: {fileSize} / 업로드된 날짜: {uploadDate.year}-
          {uploadDate.month}-{uploadDate.day}
        </>
      );
    }
  };

  return (
    <S.DetailPageContainer>
      <S.DetailPageContent ref={contentRef}>
        {type === 'file' ? renderFileDetails() : <>{textData.textData}</>}
      </S.DetailPageContent>
      <S.DetailPageInfo>
        만료까지 {expireDate.day}일 {expireDate.hour}시간 {expireDate.minute}분 / {downloadLimit}번
        남았습니다.
      </S.DetailPageInfo>
      <S.DetailPageButtonContainer>
        <Button isPrimary>다운로드</Button>
        <Button isPrimary>링크 복사</Button>
        <Button isPrimary={false}>파일 삭제</Button>
      </S.DetailPageButtonContainer>
    </S.DetailPageContainer>
  );
};
