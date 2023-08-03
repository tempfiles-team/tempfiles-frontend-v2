import styled from '@emotion/styled';

export const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DefaultLayoutWrapper = styled(DefaultLayoutContainer)`
  min-height: 90%;
  max-width: 1150px;
  row-gap: 3rem;
`;
