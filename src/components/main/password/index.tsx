import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { variants } from '@/constant';

import * as S from './styled';

export interface PasswordProps {
  setPassword: (value: string) => void;
  password: string;
  animate: 'visible' | 'hidden';
}

export const Password: React.FC<PasswordProps> = ({ setPassword, password, animate }) => {
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
    >
      <S.PasswordInput
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        value={password}
        placeholder="비밀번호를 입력해주세요"
      />
      {showPassword ? (
        <FaEye size={'1.4rem'} onClick={() => setShowPassword(false)} />
      ) : (
        <FaEyeSlash size={'1.4rem'} onClick={() => setShowPassword(true)} />
      )}
    </S.PasswordContainer>
  );
};
