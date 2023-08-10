import React from 'react';

import { variants } from '@/constant';

import * as S from './styled';
export interface OptionSectionProps {
  children: React.ReactNode;
  text: string;
  animate: 'visible' | 'hidden';
}

export const OptionSection: React.FC<OptionSectionProps> = ({ children, text, animate }) => {
  return (
    <S.OptionSection
      variants={variants}
      animate={animate}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.OptionSectionTextWrapper>{text}</S.OptionSectionTextWrapper>
      {children}
    </S.OptionSection>
  );
};
