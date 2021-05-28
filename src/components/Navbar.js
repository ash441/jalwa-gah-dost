import React from 'react'
import Menu from './Menu';
import { NavLink  } from 'react-router-dom';
import styled from 'styled-components'


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.div`
 text-decoration:none;
 padding-right:3rem;


`
const LinkMenu = styled(NavLink)`

color:#fff;
text-decoration:none;
list-style:none;
padding-right:1rem;
font-size:1.2rem;


`

const Navbar = () => {
    return (
        <>
              <Nav>
          <Menu  />
          <NavMenu>

          <LinkMenu to="#">home</LinkMenu>
          <LinkMenu to="#">contact us</LinkMenu>
          <LinkMenu to="#">about</LinkMenu>
          </NavMenu>


        </Nav>
        </>
    )
}

export default Navbar
