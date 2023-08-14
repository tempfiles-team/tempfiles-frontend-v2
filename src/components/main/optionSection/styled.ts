import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { colors } from '@/styles';

export const OptionSection = styled(motion.div)`
  width: 58%;
  display: grid;
  grid-template-columns: 0.5fr 0.7fr;
  column-gap: 1.2rem;
  height: 3rem;
  @media screen and (min-width: 500px) and (max-width: 850px) {
    grid-template-columns: 0.5fr 0.8fr;
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 0.55fr 0.9fr;
    column-gap: 0.6rem;
    width: 90%;
  }
  justify-content: space-between;
`;

export const OptionSectionTextWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  border-radius: 0.8rem;
  background-color: ${colors.secondary};
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 0.85rem;
  }
`;
