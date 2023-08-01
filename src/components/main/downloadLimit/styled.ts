import styled from '@emotion/styled';

import { colors } from '@/styles';

export const DownloadLimitContainer = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  @media screen and (min-width: 560px) and (max-width: 1150px) {
    width: 70%;
  }
  @media screen and (max-width: 560px) {
    width: 85%;
  }
`;

export const DownloadLimitSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 2.6rem;
  border-radius: 8px;
  background: ${colors.secondary};
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.6rem;
    height: 2.6rem;
    background: ${colors.softPrimary};
    border-radius: 8px;
  }
`;

export const DownloadLimitText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
