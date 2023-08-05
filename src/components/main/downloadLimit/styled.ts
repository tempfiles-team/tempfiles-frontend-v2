import styled from '@emotion/styled';

import { colors } from '@/styles';

export const DownloadLimitSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2.6rem;
  border-radius: 0.8rem;
  background: ${colors.secondary};
  outline: none;
  padding-left: 0.14rem;
  padding-right: 0.16rem;
  border: 0.16rem solid ${colors.softPrimary};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2rem;
    height: 2rem;
    background: ${colors.softPrimary};
    border-radius: 0.5rem;
  }
`;
