import styled from "@emotion/styled";

export const TextElement = styled.span<{ fontSize: string; fontWeight: number }>`
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
`;

export const TextColumnContainer = styled.div<{ isCenter?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({ isCenter }) => isCenter ? 'center' : 'flex-start'};
    row-gap: 1.4rem;
`;