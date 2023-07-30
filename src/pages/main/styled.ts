import styled from '@emotion/styled';

import { colors } from '@/styles';

export const MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 1.4rem;
`;

export const MainPageUploadOptionWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const MainPageFindContainer = styled.div`
  width: 58%;
  display: flex;
  justify-content: center;
  column-gap: 0.4rem;
  align-items: flex-start;
`;

export const MainPageTextWrapper = styled.div<{ textClick: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ textClick }) => (textClick ? '100%' : '80%')};
  padding: 0.34rem;
  column-gap: 0.4rem;
  background-color: #252728;
  border-radius: 0.8rem;
  border: 0.22rem solid ${colors.softPrimary};
`;

export const MainPageTextButton = styled.button`
  border: none;
  background-color: ${colors.softPrimary};
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem;
  align-self: center;
  justify-self: center;
  border-radius: 0.2rem;
`;

export const MainPageText = styled.span`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 700;
  color: #c8beac;
`;

export const MainPageTextArea = styled.textarea`
  outline: 0;
  background-color: transparent;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  border: none;
  resize: none;
  height: fit-content;
  max-height: 10rem;
  overflow: scroll;
  &::placeholder {
    color: #c8beac;
  }
`;

export const MainPageFindButton = styled.button`
  border: none;
  padding: 0.74rem 0.6rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${colors.primary};
  border-radius: 0.6rem;
`;

export const MainPageUploadButton = styled.button`
  border: none;
  width: 7.6rem;
  height: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${colors.primary};
  border-radius: 0.8rem;
`;

export const MainPageUploadOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.4rem;
`;

export const MainPageOptionName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const MainPageCheckBox = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  background-color: ${colors.secondary};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
