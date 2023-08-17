import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { colors } from '@/styles';

export const ButtonElement = styled(Button)<{ isTertiary?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${({ isTertiary }) => (isTertiary ? colors.tertiary : colors.primary)};
  border-radius: 0.6rem;
  cursor: pointer;
  border: none;
  margin: 0;
  &:hover {
    background-color: ${({ isTertiary }) => (isTertiary ? colors.tertiary : colors.primary)};
  }
  &.MuiButtonBase-root {
    padding: 0 1rem;
    min-width: auto;
    @media screen and (max-width: 630px) {
      padding: 0 0.9rem;
    }
  }
  @media screen and (max-width: 630px) {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
