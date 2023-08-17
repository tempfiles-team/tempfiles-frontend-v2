import React from 'react';

import { useDelete, useGetInfo, useGetItem } from '@/hooks';
import { Button, DataBox, FileDetails, SkeletonUI } from '@/components';
import { getDate, getExpireTime, getFileSize, toastSuccess } from '@/utils';
import { GetFileResponse, GetTextResponse } from '@/api';

import * as S from './styled';

export const DetailPage: React.FC = () => {
  const { id, type } = useGetInfo();

  const { data, isLoading } = useGetItem({
    type,
    options: {
      id: id ? id : '',
    },
  });

  const { mutate: deleteMutate } = useDelete();

  if (isLoading || !data?.data.uploadDate) {
    return (
      <>
        <SkeletonUI width="70%" height="3rem" margin="3rem 0px 0px 0px" />
        <SkeletonUI width="40%" height="2.8rem" margin="0" />
        <S.DetailPageButtonContainer>
          <SkeletonUI width="7rem" height="3.8rem" margin="0" />
          <SkeletonUI width="7rem" height="3.8rem" margin="0" />
          <SkeletonUI width="7rem" height="3.8rem" margin="0" />
        </S.DetailPageButtonContainer>
      </>
    );
  }

  const textData = data.data as GetTextResponse;
  const fileData = data.data as GetFileResponse;

  const { expireTime, downloadLimit } = data.data;

  const expireDate = getExpireTime(expireTime);
  const uploadDate = getDate(fileData.uploadDate);
  const fileSize = getFileSize(fileData.size);

  const fileDownload = data.data.download_url;

  const onDeleteClick = () => {
    deleteMutate({ type, id: id ? id : '' });
  };

  const onLinkCopy = () => {
    toastSuccess('링크가 복사되었어요.');
    navigator.clipboard.writeText(window.location.href);
  };

  const onTextCopy = () => {
    toastSuccess('텍스트가 복사되었어요.');
    navigator.clipboard.writeText(textData.textData);
  };

  return (
    <S.DetailPageContainer>
      <DataBox>
        {fileData.filename ? (
          <FileDetails
            fileData={fileData}
            fileSize={fileSize}
            filenameLength={fileData.filename.length}
            uploadDate={uploadDate}
          />
        ) : (
          <>{textData.textData}</>
        )}
      </DataBox>
      <S.DetailPageInfo>
        만료까지 {expireDate.day}일 {expireDate.hour}시간 {expireDate.minute}분 / {downloadLimit}번
        남았습니다.
      </S.DetailPageInfo>
      <S.DetailPageButtonContainer>
        <Button isPrimary>
          {fileData.filename ? (
            <a href={fileDownload}>다운로드</a>
          ) : (
            <a onClick={onTextCopy}>텍스트 복사</a>
          )}
        </Button>
        <Button isPrimary onClick={onLinkCopy}>
          링크 복사
        </Button>
        <Button isPrimary={false} onClick={onDeleteClick}>
          {fileData.filename ? '파일' : '텍스트'} 삭제
        </Button>
      </S.DetailPageButtonContainer>
    </S.DetailPageContainer>
  );
};
