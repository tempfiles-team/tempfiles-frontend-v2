import styled from '@emotion/styled';

import { colors } from '@/styles';

export const DetailPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1.6rem;
`;

export const DetailPageContent = styled.div`
  background-color: ${colors.file};
  color: ${colors.text};
  border-radius: 0.8rem;
  padding: 0.6rem;
  text-align: center;
  flex-wrap: wrap;
  word-break: break-all;
  font-size: 1.3rem;
  max-width: 100%;
  max-height: 10rem;
  line-height: 1.8rem;
  overflow: auto;
  cursor: default;
  &::-webkit-scrollbar {
    z-index: 999;
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4f4f4f;
    border-radius: 1rem;
  }
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    max-height: 8rem;
  }
  @media screen and (max-width: 500px) {
    max-height: 8rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const DetailPageInfo = styled.div`
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const DetailPageButtonContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 1.6rem;
  align-items: center;
`;
