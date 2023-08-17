import styled from '@emotion/styled';

export const DeletePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

export const DeletePageMainText = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const DeletePageButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  column-gap: 1.6rem;
  & > button {
    width: 8rem;
  }
`;
