import styled from '@emotion/styled';

import { colors } from '@/styles';

export const DownloadLimitSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2.8rem;
  border-radius: 0.8rem;
  background: ${colors.secondary};
  outline: none;
  padding: 0.14rem;
  border: 0.16rem solid ${colors.softPrimary};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.1rem;
    height: 2.1rem;
    background: ${colors.softPrimary};
    border-radius: 0.6rem;
  }
`;
