import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const Logo = () => {
  return <LogoContainer to="/">Computer Graphics & Imaging Lab.</LogoContainer>;
};

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: 700;
  font-size: 1.6rem;
`;

export default Logo;
