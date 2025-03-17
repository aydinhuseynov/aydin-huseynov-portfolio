import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
background-color: ${({theme}) => theme.bg };
height:80px;
display:flex;
align-items:center;
justify-content:center;
font-size:1rem;
position:sticky;
top:0;
z-index:99;
`;
const NavLogo = styled(Link)``;

export const Navbar = () => {
  return (
    <NavbarContainer>
        <NavLogo to="/">
        <a style={{
            color:"white"
        }}>AH</a>
        </NavLogo>
    </NavbarContainer>
  )
}
