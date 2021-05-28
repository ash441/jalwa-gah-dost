import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Menu from './Menu';
import { NavLink  } from 'react-router-dom';

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

const SidebarNav = styled.nav`
  background: #15171c;
  width: 350px;
  height: 100vh;
 
  display: flex;
  justify-content: center;
  position: fixed;
  top: 30;
  transition: 350ms;
  z-index: 10;
  
  @media (max-width:470px){
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};

  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <Menu show={showSidebar} />
          <NavMenu>

          <LinkMenu to="#">home</LinkMenu>
          <LinkMenu to="#">contact us</LinkMenu>
          <LinkMenu to="#">about</LinkMenu>
          </NavMenu>


        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
