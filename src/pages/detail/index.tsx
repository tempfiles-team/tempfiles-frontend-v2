import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useDelete, useGetItem } from '@/hooks';
import { Button, FileDetails, SkeletonUI } from '@/components';
import { getDate, getExpireTime, getFileSize, toastSuccess } from '@/utils';
import { GetFileResponse, GetTextResponse } from '@/api';
import { useDownload } from '@/hooks/query/download';

import * as S from './styled';

type ItemType = 'file' | 'text';

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const type = search.split('=')[1] as ItemType;

  const { data, isLoading } = useGetItem({
    type,
    options: {
      id: id ? id : '',
    },
  });

  const { mutate: deleteMutate } = useDelete();
  const { mutate: downloadMutate } = useDownload();
  const location = useLocation();

  if (isLoading || !data) {
    return (
      <>
        <SkeletonUI width="70%" height="3rem" margin="3rem 0px 0px 0px" />
        <SkeletonUI width="40%" height="2.8rem" margin="0" />
        <S.DetailPageButtonContainer>
          <SkeletonUI width="7rem" height="3.8rem" margin="0px" />
          <SkeletonUI width="7rem" height="3.8rem" margin="0px" />
          <SkeletonUI width="7rem" height="3.8rem" margin="0px" />
        </S.DetailPageButtonContainer>
      </>
    );
  }

  const textData = data.data as GetTextResponse;
  const fileData = data.data as GetFileResponse;

  const { expireTime, downloadLimit } = data.data;
  const expireDate = getExpireTime(expireTime);
  const uploadDate = getDate(data.data.uploadDate);
  const fileSize = getFileSize(fileData.size);

  const fileDownload = data.data.download_url;

  const onDeleteClick = () => {
    deleteMutate({ type, id: id ? id : '' });
  };

  const onDownloadClick = () => {
    downloadMutate({ type, id: id ? id : '' });
  };

  const onLinkClick = () => {
    navigator.clipboard.writeText(location.pathname);
    toastSuccess('링크가 복사되었어요.');
  };

  return (
    <S.DetailPageContainer>
      <S.DetailPageContent>
        {type === 'file' ? (
          <FileDetails
            fileData={fileData}
            fileSize={fileSize}
            filenameLength={fileData.filename.length}
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
        <Button isPrimary onClick={onDownloadClick}>
          <a href={fileDownload}>다운로드</a>
        </Button>
        <Button isPrimary onClick={onLinkClick}>
          링크 복사
        </Button>
        <Button isPrimary={false} onClick={() => onDeleteClick()}>
          {type === 'file' ? '파일' : '텍스트'} 삭제
        </Button>
      </S.DetailPageButtonContainer>
    </S.DetailPageContainer>
  );
};
