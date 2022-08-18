import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const MainSlide = () => {
  return (
    <MainSlideContainer>
      <Box>
        <Typography className="main">Graphics and Imaging Lab.</Typography>
        <Typography className="sub">
          Welcome to Computer Graphics and Imaging Lab at Seoultech.
        </Typography>
      </Box>
    </MainSlideContainer>
  );
};

const MainSlideContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;
  margin-bottom: 100px;
  background-image: url(https://cdn.pixabay.com/photo/2022/04/01/23/56/bird-7105939_960_720.jpg);
  background-size: cover;
  background-position: right;
  color: #fff;
  text-align: center;

  & .main {
    font-size: 56px;
    line-height: 70px;
    margin-top: 10px;
    margin-bottom: 10px;
    outline-color: #fff;
    outline-offset: 0px;
    outline-style: none;
    outline-width: 3px;
    text-transform: none;
    text-shadow: 1px 1px 6px #000;
    mix-blend-mode: normal;
  }

  & .sub {
    opacity: 0.9;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 34px;
    font-weight: 400;
  }
`;

export default MainSlide;
