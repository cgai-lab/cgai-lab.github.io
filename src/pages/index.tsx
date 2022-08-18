import { Container, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';

import Layout from '@components/Layout';
import MainSlide from '@components/main/MainSlide';
import MainIntroSection from '@components/main/MainIntroSection';
import { graphql } from 'gatsby';
import { MainIntroListType } from '@types/data';
import TitleSection from '@components/TitleSection';
import MainAboutWork from '@components/main/MainAboutWork';

const IndexPage = ({
  data: {
    mainIntroList: { edges },
  },
}: MainIntroListType) => {
  const theme = useTheme();
  const graphics = edges.filter(({ node }) => node.type === true);
  const imagings = edges.filter(({ node }) => node.type === false);

  return (
    <Layout>
      <MainSlide />

      <Container>
        <TitleSection
          title={
            <Typography variant="h6" sx={{ textAlign: 'left', lineHeight: 2 }}>
              &nbsp;Our computer graphics and image processing laboratory was
              established in 2018. Prof. Dongwann Kang has been leading the
              research. Our focus of research are in the field of 3D
              visualization, reconstruction, and image processing of object
              detection, style transfer and so on.
            </Typography>
          }
          subTitle="Introduce"
        />
        <Divider />
        <MainAboutWork
          isLeft={true}
          title="Graphics"
          src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
          content="OpenGL (Open Graphics Library[3]) is a cross-language, cross-platform
          application programming interface (API) for rendering 2D and 3D vector
          graphics."
        />
        <MainAboutWork
          isLeft={false}
          title="Imaging"
          src="https://cdn.pixabay.com/photo/2021/12/18/19/37/eye-6879642_960_720.jpg"
          content="Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat."
        />
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query {
    mainIntroList: allContentfulGraphics {
      edges {
        node {
          content
          title
          img {
            url
          }
          id
          type
        }
      }
    }
  }
`;

export default IndexPage;
