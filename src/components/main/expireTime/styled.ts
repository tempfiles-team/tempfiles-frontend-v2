import styled from '@emotion/styled';

import { colors } from '@/styles';

export const ExpireTimeContainer = styled.div`
  width: 58%;
  display: flex;
  column-gap: 0.4rem;
  height: 2.6rem;
  justify-content: space-between;
  @media screen and (min-width: 560px) and (max-width: 1150px) {
    width: 70%;
  }
  @media screen and (max-width: 560px) {
    width: 85%;
  }
`;

export const ExpireTimeText = styled.div`
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
    font-size: 1rem;
  }
`;

export const ExpireTimeOptionButton = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.6rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${colors.primary};
  border-radius: 0.6rem;
  @media screen and (max-width: 630px) {
    padding: 0 0.8rem;
    font-size: 0.94rem;
    font-weight: 600;
  }
`;
