import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ListPageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  height: 100vh;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

export const ListPageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.4rem;
`;

export const ListPageBoxShadow = styled.div`
  width: 100%;
  height: 5rem;
  position: relative;
  top: -2rem;
  background: linear-gradient(180deg, rgba(40, 42, 58, 0) 0%, #282a3a 45.31%);
  @media screen and (max-width: 500px) {
    top: -1rem;
    height: 4rem;
  }
`;

export const ListPageText = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 2rem 0;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
