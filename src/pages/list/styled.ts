import styled from '@emotion/styled';

export const ListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 500px) and (max-width: 850px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  border: 1px solid red;
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
  top: -4rem;
  background: linear-gradient(180deg, rgba(40, 42, 58, 0) 0%, #282a3a 45.31%);
`;
