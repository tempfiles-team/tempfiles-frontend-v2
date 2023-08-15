import React, { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useGetItem } from '@/hooks';
import { Button, FileDetails, SkeletonUI } from '@/components';
import { getDate, getExpireTime, getFileSize } from '@/utils';
import { GetFileResponse, GetTextResponse } from '@/api';

import * as S from './styled';

type ItemType = 'file' | 'text';

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const type = search.split('=')[1] as ItemType;
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

  const textData = data.data as GetTextResponse;
  const fileData = data.data as GetFileResponse;

  const { expireTime, downloadLimit } = data.data;
  const expireDate = getExpireTime(expireTime);
  const uploadDate = getDate(data.data.uploadDate);
  const fileSize = getFileSize(fileData.size);

  const filenameLength = fileData.filename.length;

  return (
    <S.DetailPageContainer>
      <S.DetailPageContent ref={contentRef}>
        {type === 'file' ? (
          <FileDetails
            fileData={fileData}
            fileSize={fileSize}
            filenameLength={filenameLength}
            uploadDate={uploadDate}
          />
        ) : (
          <>{textData.textData}</>
        )}
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
