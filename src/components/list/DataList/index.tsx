import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FileResponse, TextResponse } from '@/api';
import { FileDetail, DataBox } from '@/components';
import { getDate, getFileSize } from '@/utils';
import { LockSVG } from '@/assets';

import { TextDetail } from '../TextDetail';

import * as S from './styled';

export interface DataListProps {
  type: 'file' | 'text';
  dataList: TextResponse[] | FileResponse[];
}

export const DataList: React.FC<DataListProps> = ({ dataList, type }) => {
  const navigate = useNavigate();

  const handleDataBoxClick = (id: string, type: string, isEncrypted: boolean) => {
    const routePath = isEncrypted ? `/checkPw/${id}` : `/dl/${id}`;
    navigate(`${routePath}?type=${type}`);
  };

  const renderFileItem = (file: FileResponse) => {
    const uploadDate = getDate(file.uploadDate);
    const fileSize = getFileSize(file.size);

    return (
      <DataBox onClick={() => handleDataBoxClick(file.id, 'file', file.isEncrypted)} key={file.id}>
        {file.isEncrypted && <S.DataListLockIcon src={LockSVG} />}
        <FileDetail fileData={file} fileSize={fileSize} uploadDate={uploadDate} />
      </DataBox>
    );
  };

  const renderTextItem = (text: TextResponse) => {
    const uploadDate = getDate(text.uploadDate);

    return (
      <DataBox onClick={() => handleDataBoxClick(text.id, 'text', text.isEncrypted)} key={text.id}>
        {text.isEncrypted ? (
          <>
            <S.DataListLockIcon src={LockSVG} />
            비밀글입니다
          </>
        ) : (
          <TextDetail textData={text} uploadDate={uploadDate} />
        )}
      </DataBox>
    );
  };

  const renderItems = () => {
    if (type === 'file') {
      const fileData = dataList as FileResponse[];
      return fileData.map(renderFileItem);
    }

    if (type === 'text') {
      const textData = dataList as TextResponse[];
      return textData.map(renderTextItem);
    }

    return null;
  };

  return <>{renderItems()}</>;
};
