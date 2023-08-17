import React from 'react';

import { useGetWindowSize } from '@/hooks';
import { TextResponse } from '@/api';

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

  const calculateMaxTextLength = () => {
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

  const getShortText = (text: string, maxTextLength: number) => {
    if (text.length > maxTextLength) {
      return `${text.slice(0, maxTextLength)}...`;
    }

    return textName;
  };

  const textName = textData.data;
  const textNameLength = textName.length;

  const maxTextLength = calculateMaxTextLength();
  const shortText = getShortText(textName, maxTextLength);

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
