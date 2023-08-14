import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { colors } from '@/styles';

export const ButtonElement = styled(Button)<{ isPrimary: boolean }>`
  background-color: ${({ isPrimary }) => (isPrimary ? colors.primary : colors.tertiary)};
  border-radius: 0.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  height: 3.8rem;
  border: 0;
  color: ${colors.white};
  &:hover {
    background-color: ${({ isPrimary }) => (isPrimary ? colors.primary : colors.tertiary)};
  }
`;
