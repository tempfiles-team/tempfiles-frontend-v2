import React from 'react';

import { useGetWindowSize } from '@/hooks';
import { FileResponse } from '@/api';

export interface FileDetailProps {
  filenameLength: number;
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
  filenameLength,
  uploadDate,
  fileData,
  fileSize,
  isDetailPage,
}) => {
  const { windowSize } = useGetWindowSize();

  const calculateMaxFilenameLength = () => {
    switch (true) {
      case windowSize > 1250:
        return 80;
      case windowSize > 1180:
        return 60;
      case windowSize > 768:
        return 55;
      case windowSize > 530:
        return 42;
      default:
        return 27;
    }
  };

  const getShortFileName = (fileName: string, maxFilenameLength: number) => {
    const lastDot = fileName.lastIndexOf('.');
    const fileExtension = lastDot === -1 ? '' : fileName.substring(lastDot + 1);

    if (fileName.length > maxFilenameLength) {
      return `${fileName.slice(0, maxFilenameLength)}(...).${fileExtension}`;
    }

    return fileName;
  };

  const fileName = fileData.filename;

  const maxFilenameLength = calculateMaxFilenameLength();
  const shortFileName = getShortFileName(fileName, maxFilenameLength);

  let detailsText: React.ReactNode;

  if (windowSize < 550 && filenameLength <= 18) {
    detailsText = (
      <>
        {!isDetailPage ? shortFileName : fileName} / {fileSize} <br />
        업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  } else if (
    (windowSize > 550 && filenameLength >= 18) ||
    (windowSize < 550 && filenameLength > 30)
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
