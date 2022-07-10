import MainCard from '@components/card/MainCard';
import TitleSection from '@components/TitleSection';
import { Box, Grid } from '@mui/material';
import { MainIntroType } from '@types/data';
import React from 'react';

const MainIntroSection = ({
  title,
  data,
}: {
  title: string;
  data: { node: MainIntroType }[];
}) => {
  return (
    <Box>
      <TitleSection title={title} subTitle="main" />
      <Grid container spacing={3} justifyContent="center">
        {data.map(({ node }) => (
          <Grid item xs={6} sm={6} md={6} lg={3} key={node.id}>
            <MainCard
              title={node.title}
              content={node.content}
              imgUrl={node.img.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainIntroSection;
