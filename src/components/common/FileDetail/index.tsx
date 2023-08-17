import React from 'react';

import { useGetWindowSize } from '@/hooks';
import { FileResponse } from '@/api';
import { calculateMaxDataLength, getShortData } from '@/utils';

export interface FileDetailProps {
  uploadDate: {
    year: number;
    month: number;
    day: number;
  };
  fileData: FileResponse;
  fileSize: string;
  isDetailPage?: boolean;
}

export const FileDetail: React.FC<FileDetailProps> = ({
  uploadDate,
  fileData,
  fileSize,
  isDetailPage,
}) => {
  const { windowSize } = useGetWindowSize();

  const fileName = fileData.filename;
  const fileNameLength = fileName.length;

  const maxFilenameLength = calculateMaxDataLength(windowSize);
  const shortFileName = getShortData(fileName, maxFilenameLength);

  let detailsText: React.ReactNode;

  if (windowSize < 550 && fileNameLength <= 18) {
    detailsText = (
      <>
        {!isDetailPage ? shortFileName : fileName} / {fileSize} <br />
        업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  } else if (
    (windowSize > 550 && fileNameLength >= 18) ||
    (windowSize < 550 && fileNameLength > 30)
  ) {
    detailsText = (
      <>
        {!isDetailPage ? shortFileName : fileName}
        <br />
        {fileSize} / 업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  } else {
    detailsText = (
      <>
        {!isDetailPage ? shortFileName : fileName} / {fileSize} / 업로드된 날짜: {uploadDate.year}-
        {uploadDate.month}-{uploadDate.day}
      </>
    );
  }

  return <>{detailsText}</>;
};
