import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

const Logo = () => {
  return (
    <LogoContainer to="/">
      <Typography>Computer Graphics & Imaging Lab.</Typography>
    </LogoContainer>
  );
};

const LogoContainer = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

export default Logo;
