import styled from '@emotion/styled';

import { colors } from '@/styles';

export const ButtonElement = styled.div<{ isTertiary?: boolean }>`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${({ isTertiary }) => (isTertiary ? colors.tertiary : colors.primary)};
  border-radius: 0.6rem;
  cursor: pointer;
  @media screen and (max-width: 630px) {
    padding: 0 0.8rem;
    font-size: 0.94rem;
    font-weight: 600;
  }
`;
