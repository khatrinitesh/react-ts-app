import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuItem = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const CustomApp = () => {
  return (
    <>
      <CenteredMenuLink/>
    </>
  )
}

export default CustomApp

const CenteredMenuLink: React.FC = () => {
    return (
      <MenuContainer>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </MenuContainer>
    );
  };


