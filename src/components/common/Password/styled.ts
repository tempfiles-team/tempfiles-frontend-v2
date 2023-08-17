import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { colors } from '@/styles';

export const PasswordContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  column-gap: 0.4rem;
  background-color: ${colors.secondary};
  border-radius: 0.8rem;
  height: 3.4rem;
  border: 0.2rem solid ${colors.softPrimary};
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
