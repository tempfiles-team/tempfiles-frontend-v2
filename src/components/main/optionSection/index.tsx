import React from 'react';

import * as S from './styled';
export interface OptionSectionProps {
  children: React.ReactNode;
  text: string;
}

export const OptionSection: React.FC<OptionSectionProps> = ({ children, text }) => {
  return (
    <S.OptionSection>
      <S.OptionSectionTextWrapper>{text}</S.OptionSectionTextWrapper>
      {children}
    </S.OptionSection>
  );
};
