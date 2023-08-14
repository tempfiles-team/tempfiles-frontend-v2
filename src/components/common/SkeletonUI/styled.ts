import styled from '@emotion/styled';

export const SkeletonUIElement = styled.div<{
  width: string;
  height: string;
  margin: string;
}>`
  display: flex;
  min-width: ${({ width }) => width};
  min-height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  background: var(--color-backgorund-filelistbox);
  border-radius: 0.8rem;
  overflow: hidden;
  &::before {
    content: ' ';
    width: 100%;
    height: auto;
    animation: loading 2s infinite;
    box-shadow: 0 0 3rem 3rem rgba(255, 255, 255, 0.3);
  }
  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translate(200%);
    }
  }
`;
