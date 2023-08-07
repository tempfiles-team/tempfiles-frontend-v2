import React from 'react';

import { OptionSection } from '../optionSection';

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
    <OptionSection text={`다운로드 횟수 ${downloadLimit}번`}>
      <S.DownloadLimitSlider
        type="range"
        min={1}
        max={100}
        defaultValue={downloadLimit}
        onChange={onDownloadLimitChange}
        step={1}
      />
    </OptionSection>
  );
};
