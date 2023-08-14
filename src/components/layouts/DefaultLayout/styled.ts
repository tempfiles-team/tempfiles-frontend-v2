import styled from '@emotion/styled';

export const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const DefaultLayoutWrapper = styled(DefaultLayoutContainer)`
  justify-content: flex-start;
  position: relative;
  height: 68%;
  row-gap: 3rem;
  @media screen and (min-height: 800px) and (max-height: 1100px) {
    height: 76%;
  }
  @media screen and (max-width: 500px) {
    height: 80%;
  }
  width: 46%;
  max-width: 1150px;
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const DefaultLayoutTitleContainer = styled.div`
  position: static;
  top: 0;
`;
