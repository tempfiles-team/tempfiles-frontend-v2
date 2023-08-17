import React from 'react';

import { useGetWindowSize } from '@/hooks';
import { TextResponse } from '@/api';
import { calculateMaxDataLength, getShortData } from '@/utils';

export interface TextDetailProps {
  uploadDate: {
    year: number;
    month: number;
    day: number;
  };
  textData: TextResponse;
}

export const TextDetail: React.FC<TextDetailProps> = ({ uploadDate, textData }) => {
  const { windowSize } = useGetWindowSize();

  const textName = textData.data;
  const textNameLength = textName.length;

  const maxTextLength = calculateMaxDataLength(windowSize);
  const shortText = getShortData(textName, maxTextLength);

  let detailsText: React.ReactNode;

  if (windowSize < 550 && textNameLength <= 22) {
    detailsText = (
      <>
        {shortText} / {textNameLength}글자 <br />
        업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  } else if (
    (windowSize > 550 && textNameLength >= 40) ||
    (windowSize < 550 && textNameLength > 22)
  ) {
    detailsText = (
      <>
        {shortText}
        <br />
        {textNameLength}글자 / 업로드된 날짜: {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  } else {
    detailsText = (
      <>
        {shortText} / {textNameLength}글자 / 업로드된 날짜:
        {uploadDate.year}-{uploadDate.month}-{uploadDate.day}
      </>
    );
  }

  return <>{detailsText}</>;
};
