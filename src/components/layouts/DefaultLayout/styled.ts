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
  width: 100%;
  padding: 0 2rem;
  overflow: hidden;
  max-width: 1250px;
  row-gap: 1rem;
  @media screen and (min-width: 1800px) {
    max-width: 1500px;
  }
  @media screen and (min-height: 800px) and (max-height: 1100px) {
    height: 76%;
  }
  @media screen and (max-width: 500px) {
    row-gap: 0;
    padding: 0 1rem;
    height: 80%;
  }
`;

export const DefaultLayoutTitleContainer = styled.div`
  position: static;
  top: 0;
  margin-bottom: 3rem;
  @media screen and (max-width: 500px) {
    margin-bottom: 3rem;
  }
`;
