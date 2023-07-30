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
      />
      {showPassword ? (
        <FaEye size={26} onClick={() => setShowPassword(false)} />
      ) : (
        <FaEyeSlash size={26} onClick={() => setShowPassword(true)} />
      )}
    </S.PasswordContainer>
  );
};
