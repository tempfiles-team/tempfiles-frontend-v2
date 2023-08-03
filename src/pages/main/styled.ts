import { FaCheck } from 'react-icons/fa';

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
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const MainPageFindContainer = styled.div<{ textClick: boolean }>`
  width: 58%;
  display: ${({ textClick }) => (textClick ? 'flex' : 'grid')};
  grid-template-columns: 1fr 0.24fr;
  column-gap: 0.4rem;
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 0.3fr;
    width: 90%;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr 0.26fr;
  }
`;

export const MainPageTextWrapper = styled.div<{ textClick: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  border: 0.2rem solid ${colors.softPrimary};
  align-self: center;
  border-radius: 0.8rem;
  height: 3rem;
  padding: 0.3rem;
  width: 100%;
  column-gap: 0.4rem;
`;

export const MainPageTextButton = styled.button`
  border: none;
  background-color: ${colors.softPrimary};
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.3rem;
  align-self: center;
  justify-self: center;
  border-radius: 0.2rem;
`;

export const MainPageText = styled.span`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 700;
  color: #c8beac;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    font-weight: 600;
  }
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
  padding: 0;
  max-height: 10rem;
  &::placeholder {
    color: #c8beac;
  }
  &::-webkit-scrollbar {
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
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const MainPageFindButton = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${colors.primary};
  border-radius: 0.6rem;
  cursor: pointer;
  @media screen and (max-width: 630px) {
    padding: 0 0.8rem;
    font-size: 0.94rem;
    font-weight: 600;
  }
`;

export const MainPageUploadButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  width: 7.6rem;
  height: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: ${colors.primary};
  border-radius: 0.8rem;
`;

export const MainPageFindFileButton = styled(MainPageUploadButton)`
  margin-top: 0;
  width: 6.6rem;
`;

export const MainPageUploadOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.6rem;
`;

export const MainPageOptionName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const MainPageCheckBox = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  background-color: ${colors.secondary};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const MainPageCheckIcon = styled(FaCheck)`
  width: 1.6rem;
  height: 1.6rem;
  @media screen and (max-width: 500px) {
    width: 1rem;
    height: 1rem;
  }
`;
