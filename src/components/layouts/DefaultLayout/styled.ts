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
  max-width: 1150px;
  row-gap: 3rem;
  @media screen and (min-height: 800px) and (max-height: 1100px) {
    height: 76%;
  }
  @media screen and (max-width: 500px) {
    height: 72%;
  }
`;

export const DefaultLayoutTitleContainer = styled.div`
  position: static;
  top: 0;
  z-index: 9999;
`;
