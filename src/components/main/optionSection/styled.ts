import styled from '@emotion/styled';

import { colors } from '@/styles';

export const OptionSection = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 0.5fr 0.53fr;
  column-gap: 1.2rem;
  height: 3rem;
  @media screen and (min-width: 560px) and (max-width: 1150px) {
    width: 70%;
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: 0.5fr 1fr;
    width: 90%;
  }
`;

export const OptionSectionTextWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  border-radius: 0.8rem;
  background-color: ${colors.secondary};
  font-weight: 700;
  @media screen and (max-width: 560px) {
    font-size: 0.85rem;
  }
`;
