/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { css } from '@emotion/react';

import { variants } from '@/constant';
import { colors } from '@/styles';

import * as S from './styled';

export interface PasswordProps {
  setPassword: (value: string) => void;
  password: string;
  animate: 'visible' | 'hidden';
  isMainPage?: boolean;
}

export const Password: React.FC<PasswordProps> = ({
  setPassword,
  password,
  animate,
  isMainPage,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <S.PasswordContainer
      variants={variants}
      animate={animate}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      css={
        isMainPage &&
        css`
          height: 3rem;
        `
      }
    >
      <S.PasswordInput
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={password}
        placeholder="비밀번호를 입력해주세요"
      />
      {showPassword ? (
        <FaEye color={colors.primary} size={'1.6rem'} onClick={() => setShowPassword(false)} />
      ) : (
        <FaEyeSlash color={colors.primary} size={'1.6rem'} onClick={() => setShowPassword(true)} />
      )}
    </S.PasswordContainer>
  );
};
