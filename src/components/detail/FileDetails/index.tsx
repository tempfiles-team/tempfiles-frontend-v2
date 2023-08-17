import React from 'react';

import { useGetWindowSize } from '@/hooks';
import { FileResponse } from '@/api';

export interface FileDetailsProps {
  filenameLength: number;
  uploadDate: {
    year: number;
    month: number;
    day: number;
  };
  fileData: FileResponse;
  fileSize: string;
}

export const FileDetails: React.FC<FileDetailsProps> = ({
  filenameLength,
  uploadDate,
  fileData,
  fileSize,
}) => {
  const { windowSize } = useGetWindowSize();

  let detailsText: React.ReactNode;

  if (windowSize < 550 && filenameLength <= 18) {
    detailsText = (
      <>
        {fileData.filename} / {fileSize} <br />
        업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  } else if (
    (windowSize < 1180 && windowSize > 550 && filenameLength <= 46 && filenameLength >= 18) ||
    (windowSize < 550 && filenameLength > 30)
  ) {
    detailsText = (
      <>
        {fileData.filename}
        <br />
        크기: {fileSize} / 업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  } else {
    detailsText = (
      <>
        파일 이름: {fileData.filename} / 크기: {fileSize} / 업로드된 날짜: {uploadDate.year}-
        {uploadDate.month}-{uploadDate.day}
      </>
    );
  }

  return <>{detailsText}</>;
};
