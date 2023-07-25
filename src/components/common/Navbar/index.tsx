import React from "react";
import * as S from "./styled"
import { NAVBAR_MENU } from "@/constant/navbar";

export const Navbar: React.FC = () => {
    return (
        <S.NavbarContainer>
            {NAVBAR_MENU.map(({ text, href }) => (
                <S.NavbarText to={href}>{text}</S.NavbarText>
            ))}
        </S.NavbarContainer>
    )
}