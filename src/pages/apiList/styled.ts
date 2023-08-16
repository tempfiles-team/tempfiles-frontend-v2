import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { colors } from '@/styles';

export const ApiListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.4rem;
  width: 60%;
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ApiListPageCategories = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.6rem;
`;

export const ApiListCategory = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  border-radius: 0.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: ${({ isSelected }) => (isSelected ? colors.primary : colors.secondary)};
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? colors.white : '#757575')};
  transition: background-color 0.2s ease-in-out;
`;

export const ApiList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  margin-top: 2rem;
  & > div {
    justify-content: center;
    width: 60%;
    padding: 1rem 0;
    @media screen and (max-width: 500px) {
      font-size: 1rem;
      width: 90%;
    }
  }
`;

export const ApiListPageBoxShadow = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  top: -2.5rem; //-25px
  background: linear-gradient(180deg, rgba(40, 42, 58, 0) 0%, #282a3a 45.31%);
`;
