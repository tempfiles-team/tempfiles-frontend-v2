import React from 'react';

import * as S from './styled';

export interface DownloadLimitProps {
  setDownloadLimit: (value: number) => void;
  downloadLimit: number;
}

export const DownloadLimit: React.FC<DownloadLimitProps> = ({
  setDownloadLimit,
  downloadLimit,
}) => {
  const onDownloadLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownloadLimit(Number(e.target.value));
  };
  return (
    <S.DownloadLimitContainer>
      <S.DownloadLimitText>{downloadLimit}</S.DownloadLimitText>
      <S.DownloadLimitSlider
        type="range"
        min={1}
        max={100}
        defaultValue={0}
        onChange={onDownloadLimitChange}
        step={1}
      />
    </S.DownloadLimitContainer>
  );
};
