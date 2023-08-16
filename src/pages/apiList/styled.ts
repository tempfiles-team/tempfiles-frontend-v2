import styled from '@emotion/styled';

import { colors } from '@/styles';

export const ApiListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.4rem;
  width: 60%;
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const ApiListPageCategories = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.6rem;
`;

export const ApiListCategory = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3rem;
  border-radius: 0.6rem;
  font-size: 1.3rem;
  font-weight: 600;
  background-color: ${({ isSelected }) => (isSelected ? colors.primary : colors.secondary)};
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? colors.white : '#757575')};
  transition: background-color 0.2s ease-in-out;
`;
