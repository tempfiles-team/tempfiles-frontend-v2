import styled from '@emotion/styled';

export const CheckPwPageContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.6rem;
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const CheckPwPasswordContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.7fr 0.2fr;
  column-gap: 1rem;
  justify-content: center;
`;

export const CheckPwLockIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin: 0;
  margin-right: 0.6rem;
`;
