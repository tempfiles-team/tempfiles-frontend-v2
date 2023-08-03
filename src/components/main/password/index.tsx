import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import * as S from './styled';

export interface PasswordProps {
  setPassword: (value: string) => void;
  password: string;
}

export const Password: React.FC<PasswordProps> = ({ setPassword, password }) => {
  const [showPassword, setShowPassword] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <S.PasswordContainer>
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
