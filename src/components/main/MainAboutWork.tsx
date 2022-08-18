import IntroSection from '@components/main/IntroSection';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const MainAboutWork = ({
  isLeft,
  title,
  content,
  src,
}: {
  isLeft: boolean;
  title: string;
  content: string;
  src: string;
}) => {
  return (
    <Grid container columnSpacing={10} rowSpacing={3} my={1}>
      <Grid item md={4} xs={12} order={{ xs: 2, md: isLeft ? 1 : 2 }}>
        <IntroSection subTitle="ABOUT" title={title} />
        <Typography sx={{ lineHeight: 2 }}>{content}</Typography>
      </Grid>
      <Grid item md={8} xs={12} order={{ xs: 1, md: isLeft ? 2 : 1 }}>
        <ImageWrapper src={src} alt={`${title}_about`} />
      </Grid>
    </Grid>
  );
};

const ImageWrapper = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  // max-height: 450px;
`;

export default MainAboutWork;
