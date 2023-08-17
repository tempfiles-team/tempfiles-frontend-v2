import styled from '@emotion/styled';

import { colors } from '@/styles';

export const SkeletonUIBoxElement = styled.div`
  display: flex;
  background-color: ${colors.file};
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  min-height: 3rem;
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
