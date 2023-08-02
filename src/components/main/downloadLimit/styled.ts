import styled from '@emotion/styled';

import { colors } from '@/styles';

export const DownloadLimitContainer = styled.div`
  width: 58%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.4rem;
  @media screen and (min-width: 560px) and (max-width: 1150px) {
    width: 70%;
  }
  @media screen and (max-width: 560px) {
    width: 85%;
  }
  background: ${colors.secondary};
  border-radius: 0.8rem;
  height: 3rem;
  padding: 0.2rem;
`;

export const DownloadLimitSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  background-color: transparent;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.6rem;
    height: 2.6rem;
    background: ${colors.softPrimary};
    border-radius: 0.8rem;
  }
`;

export const DownloadLimitText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 2.4rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50%;
  border: 1px solid ${colors.softPrimary};
`;
