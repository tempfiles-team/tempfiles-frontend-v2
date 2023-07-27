import styled from '@emotion/styled';

import { colors } from '@/styles';

export const MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MainPageTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 0.4rem;
  column-gap: 0.4rem;
  background-color: #252728;
  border-radius: 0.8rem;
  border: 0.22rem solid ${colors.softPrimary};
`;

export const MainPageTextButton = styled.button`
  border: none;
  background-color: ${colors.softPrimary};
  font-size: 1.2rem;
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
  font-weight: 700;
  display: flex;
  border: none;
  resize: none;
  height: fit-content;
  caret: none;
  &::placeholder {
    color: #c8beac;
  }
`;
