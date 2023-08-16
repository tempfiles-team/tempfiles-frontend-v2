import styled from '@emotion/styled';

export const ApiPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.6rem;
  width: 100%;
`;

export const ApiPageMethodWrapper = styled.div`
  & > div {
    width: fit-content;
    padding: 0.8rem;
  }
`;

export const ApiPageDescription = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
`;

export const ApiPageCurl = styled.div`
  max-width: 100%;
  word-wrap: break-word;
  background-color: #373c62cc;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 0.8rem;
  padding: 1.6rem 1rem;
  line-height: 2rem;
`;
