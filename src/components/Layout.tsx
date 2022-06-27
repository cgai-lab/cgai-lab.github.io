import { AppBar, Box, Button, Toolbar, useTheme } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const pages: string[] = [
  'about',
  'people',
  'research',
  'publications',
  'courses',
  'news',
];

const Layout: React.FC<{ children: React.ReactNode; data: any }> = ({
  children,
}) => {
  console.log(useTheme());
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default">
          <Toolbar disableGutters>
            <StaticImage src="../images/logo.png" alt="logo" />
            <Box sx={{ flexGrow: 99 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavButton key={page}>{page}</NavButton>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>{children}</Box>
    </>
  );
};

const NavButton = styled.a`
  color: #222222;
  padding: 9px 20px;
  opacity: 0.6;
  font-size: 12px;
  line-height: 20px;
  transition: opacity 200ms ease;
  font-weight: 500;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  vertical-align: top;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
  :activate {
    color: #43464d;
    opacity: 0.8;
    font-weight: 600;
  }
`;

export default Layout;
