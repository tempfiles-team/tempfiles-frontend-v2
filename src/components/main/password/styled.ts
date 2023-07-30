import styled from '@emotion/styled';

import { colors } from '@/styles';

export const PasswordContainer = styled.div`
  width: 58%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  column-gap: 0.4rem;
  background-color: #252728;
  border-radius: 0.8rem;
  border: 0.22rem solid ${colors.softPrimary};
`;

export const PasswordInput = styled.input`
  width: 100%;
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  outline: 0;
`;
