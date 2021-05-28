import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = ({show}) => {
    return (
        <div>
            <NavIcon to='#'>
            <h4 onClick={show} >Jalwa Gah Dost</h4>
          </NavIcon>
        </div>
    )
}



const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:#fff;
  text-decoration:none;
  &:hover {
      color:red;
  }
  
  
`;


export default Menu;
