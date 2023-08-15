import React from 'react';

import { useGetWindowSize } from '@/hooks';
import { GetFileResponse } from '@/api';

export interface FileDetailsProps {
  filenameLength: number;
  uploadDate: {
    year: number;
    month: number;
    day: number;
  };
  fileData: GetFileResponse;
  fileSize: string;
}

export const FileDetails: React.FC<FileDetailsProps> = ({
  filenameLength,
  uploadDate,
  fileData,
  fileSize,
}) => {
  const { windowSize } = useGetWindowSize();
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
