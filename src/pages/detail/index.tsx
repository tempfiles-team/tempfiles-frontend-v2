import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useGetItem } from '@/hooks';
import { GetFileResponse, GetTextResponse } from '@/api';
import { SkeletonUI } from '@/components';
import { getDate, getExpireTime } from '@/utils';

import * as S from './styled';

interface ItemTypeMap {
  file: GetFileResponse;
  text: GetTextResponse;
}

type ItemType = keyof ItemTypeMap;

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const type = search.split('=')[1] as ItemType;

  const { data, isLoading } = useGetItem({
    type: type,
    options: {
      id: id,
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

  const expireDate = getExpireTime(textData.expireTime);
  const uploadDate = getDate(fileData.uploadDate);

  return (
    <S.DetailPageContainer>
      <S.FileBox>
        {textData.textData || fileData.filename}
        <br />
        크기: {fileData.size} / 업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </S.FileBox>
      <S.DetailPageInfo>
        만료까지 {expireDate.day}일 {expireDate.hour}시간 {expireDate.minute}분 /{' '}
        {textData.downloadLimit}번 남았습니다.
      </S.DetailPageInfo>
    </S.DetailPageContainer>
  );
};
