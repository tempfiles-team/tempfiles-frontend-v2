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
  width: 70%;
  padding: 0.4rem;
  column-gap: 0.4rem;
  height: 3rem;
  background-color: #252728;
  border-radius: 0.8rem;
  border: 0.22rem solid ${colors.softPrimary};
`;

export const MainPageTextInput = styled.textarea`
  min-height: 2rem;
  max-height: 20rem;
`;
