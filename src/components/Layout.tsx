import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  List,
  Toolbar,
} from '@mui/material';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import Footer from './Footer';

import Logo from './Logo';

const pages: string[] = [
  'professor',
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
    <Wrapper>
      <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ position: 'relative' }}
        >
          <Toolbar
            disableGutters
            color="transparent"
            sx={{ padding: '30px 50px' }}
          >
            <Logo />
            <Box sx={{ flexGrow: 10 }} />
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
              }}
            >
              {pages.map((page) => (
                <NavButton key={page} to={`/${page}`}>
                  {page}
                </NavButton>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
              }}
            >
              <IconButton
                color="inherit"
                aria-label="add"
                edge="end"
                onClick={handleClick}
                sx={{ px: '0' }}
              >
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
                sm: 'display',
                md: 'none',
                lg: 'none',
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

      <ContentContainer px={3} py={1}>
        {children}
      </ContentContainer>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  min-height: 100vh;
`;

const CustomMenu = styled(Collapse)`
  position: absolute;
  background-color: #fff;
  z-index: 99;
  top: 100px;
  width: 100%;
`;

const ContentContainer = styled(Box)`
  position: relative;
  min-height: 66vh;
`;

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
  padding-top: 15px;
  padding-bottom: 15px;
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

  :hover {
    opacity: 0.9;
    background-color: #eef0f3;
  }
  :activate {
    color: #43464d;
    opacity: 0.8;
    font-weight: 600;
  }
`;

export default Layout;
