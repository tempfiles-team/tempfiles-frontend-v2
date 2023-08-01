import styled from '@emotion/styled';

import { colors } from '@/styles';

export const ButtonElement = styled.button`
  border: none;
  width: 7.6rem;
  padding: 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${colors.primary};
  border-radius: 0.6rem;
  @media screen and (max-width: 630px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;
