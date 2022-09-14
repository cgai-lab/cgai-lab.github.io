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
          subTitle="Introduction"
        />
        <Divider />
        <MainAboutWork
          isLeft={true}
          title="Graphics"
          src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
          content="Computer graphics is a sub-field of computer science which studies methods for digitally synthesizing and manipulating visual content. Although the term often refers to the study of three-dimensional computer graphics, it also encompasses two-dimensional graphics and image processing."
        />
        <MainAboutWork
          isLeft={false}
          title="Imaging"
          src="https://cdn.pixabay.com/photo/2021/12/18/19/37/eye-6879642_960_720.jpg"
          content="Computer imaging is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to understand and automate tasks that the human visual system can do."
        />
        <TitleSection
          title={
            <Typography
              variant="subtitle1"
              sx={{ textAlign: 'left', lineHeight: 2 }}
            >
              We are looking for motivated PhD students / PostDocs who are not
              afraid to get their hands dirty. f you are interested in computer
              graphics and vision, and are motivated and diligent, please
              email&nbsp;
              <a href="mailto:dongwann@seoultech.ac.kr">
                dongwann@seoultech.ac.kr
              </a>
              &nbsp; to discuss your potential for a career in our lab.
            </Typography>
          }
          subTitle="Open Postions"
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
