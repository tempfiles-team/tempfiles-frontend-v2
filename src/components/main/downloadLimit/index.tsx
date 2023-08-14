import React from 'react';

import { OptionSection } from '../OptionSection';

import * as S from './styled';

export interface DownloadLimitProps {
  setDownloadLimit: (value: number) => void;
  downloadLimit: number;
  animate: 'visible' | 'hidden';
}

export const DownloadLimit: React.FC<DownloadLimitProps> = ({
  setDownloadLimit,
  downloadLimit,
  animate,
}) => {
  const onDownloadLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDownloadLimit(Number(e.target.value));
  };
  return (
    <OptionSection animate={animate} text={`다운로드 횟수 ${downloadLimit}번`}>
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
