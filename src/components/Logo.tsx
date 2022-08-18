import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import logo from '@images/logo.png';

const Logo = () => {
  return (
    <LogoContainer to="/">
      <img src={logo} />
      <p>Computer Graphics & Imaging Lab.</p>
    </LogoContainer>
  );
};

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: 700;
  font-size: 0.7rem;
  justify-content: center;
  text-align: center;
  & img {
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  & p {
    margin: 0;
  }
`;

export default Logo;
