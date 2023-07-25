import { colors } from "@/styles/colors";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6rem;
`;

export const NavbarText = styled(Link)`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${colors.white};
    text-decoration: none;
`;

