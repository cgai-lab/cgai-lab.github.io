import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  List,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';

const pages: string[] = [
  'about',
  'people',
  'research',
  'publications',
  'courses',
  'news',
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar disableGutters color="default">
            <Logo />
            <Box sx={{ flexGrow: 99 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavButton key={page} to={`/${page}`}>
                  {page}
                </NavButton>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="inherit" edge="end" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
          <CustomMenu
            id="basic-menu"
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{
              display: {
                xs: 'display',
                md: 'none',
              },
            }}
          >
            <List component="div" disablePadding>
              {pages.map((page) => (
                <BottomButton key={page} to={`/${page}`}>
                  {page}
                </BottomButton>
              ))}
            </List>
          </CustomMenu>
        </AppBar>
      </Box>
      <Box>{children}</Box>
    </>
  );
};

const CustomMenu = styled(Collapse)``;

const NavButton = styled(Link)`
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

const BottomButton = styled(Link)`
  margin-left: 0px;
  padding-top: 9px;
  padding-bottom: 9px;
  opacity: 0.6;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;

  text-align: center;
  display: block;
  position: relative;
  vertical-align: top;
  color: #222222;
`;

export default Layout;
