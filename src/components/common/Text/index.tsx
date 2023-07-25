import React from "react";
import * as S from "./styled"

export interface TextCommonProps {
    children: React.ReactNode;
}

export interface TextColumnContainerProps extends TextCommonProps {
    isCenter?: boolean;
}

export const TextColumnContainer: React.FC<TextColumnContainerProps> = ({ children, isCenter = true }) => {
    return (
        <S.TextColumnContainer isCenter={isCenter}>{children}</S.TextColumnContainer>
    )
}

export interface TextComponentProps extends TextCommonProps {
    fontSize: string;
    fontWeight: number;
}

export const TextComponent: React.FC<TextComponentProps> = ({ fontSize, fontWeight, children }) => {
    return (
        <S.TextElement fontSize={fontSize} fontWeight={fontWeight}>{children}</S.TextElement>
    )
}

export const Text = Object.assign(TextComponent, {
    Column: TextColumnContainer,
});
