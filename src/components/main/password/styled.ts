import styled from '@emotion/styled';

import { colors } from '@/styles';

export const PasswordContainer = styled.div`
  width: 58%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  column-gap: 0.4rem;
  background-color: ${colors.secondary};
  border-radius: 0.8rem;
  height: 3rem;
  border: 0.2rem solid ${colors.softPrimary};
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: 700;
  height: 3rem;
  outline: 0;
  border: none;
  color: white;
  &::placeholder {
    color: #c8beac;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;
