import styled from '@emotion/styled';

export const ListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100vh;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

export const ListPageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.4rem;
`;

export const ListPageBoxShadow = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  top: -2rem;
  background: linear-gradient(180deg, rgba(40, 42, 58, 0) 0%, #282a3a 45.31%);
  @media screen and (max-width: 500px) {
    top: -1rem;
    height: 4rem;
  }
`;
