import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const NavbarContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6rem;
  @media screen and (max-width: 500px) {
    padding: 1.6rem 0;
  }
`;

export const NavbarText = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.white};
  text-decoration: none;
`;
