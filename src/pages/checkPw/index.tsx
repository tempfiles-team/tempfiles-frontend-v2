import React, { useState } from 'react';

import { Button, DataBox, FileDetail, Password, SkeletonUI } from '@/components';
import { useGetItem, useCheckPw } from '@/hooks';
import { LockSVG } from '@/assets';
import { GetFileResponse } from '@/api';
import { getDate, getFileSize } from '@/utils';
import { useGetInfo } from '@/hooks';

import * as S from './styled';

export const CheckPwPage: React.FC = () => {
  const { id, type } = useGetInfo();

  const [password, setPassword] = useState<string>('');

  const { data, isLoading } = useGetItem({
    type: type === 'file' ? 'file' : 'none',
    options: {
      id: id ? id : '',
    },
    isCheckPwPage: true,
    isEncrypt: true,
  });

  const { mutate } = useCheckPw();

  if (isLoading) {
    return (
      <>
        <SkeletonUI width="60%" height="3rem" margin="3rem 0px 0px 0px" />
        <S.CheckPwSkeletonContainer>
          <SkeletonUI width="79%" height="2.8rem" margin="0" />
          <SkeletonUI width="7rem" height="3.4rem" margin="0px" />
        </S.CheckPwSkeletonContainer>
      </>
    );
  }

  const fileRender = () => {
    if (data?.data.uploadDate) {
      const fileData = data.data as GetFileResponse;

      const fileSize = getFileSize(fileData.size);
      const uploadDate = getDate(fileData.uploadDate);
      return (
        <FileDetail
          fileData={fileData}
          fileSize={fileSize || ''}
          uploadDate={uploadDate || { year: 0, month: 0, day: 0 }}
        />
      );
    }
  };

  const onPasswordSubmit = () => {
    mutate({ id: id ? id : '', password });
  };

  return (
    <S.CheckPwPageContainer>
      <DataBox>
        {!data?.data ? (
          <>
            <S.CheckPwLockIcon src={LockSVG} /> 텍스트를 확인하려면 비밀번호를 입력하세요{' '}
          </>
        ) : (
          fileRender()
        )}
      </DataBox>
      <S.CheckPwPasswordContainer>
        <Password setPassword={setPassword} password={password} animate="visible" />
        <Button isPrimary onClick={onPasswordSubmit}>
          전송
        </Button>
      </S.CheckPwPasswordContainer>
    </S.CheckPwPageContainer>
  );
};
