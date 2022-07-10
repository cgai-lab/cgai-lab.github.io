import { Container, Typography, useTheme } from '@mui/material';
import React from 'react';

import Layout from '@components/Layout';
import MainSlide from '@components/main/MainSlide';
import MainIntroSection from '@components/main/MainIntroSection';
import { graphql } from 'gatsby';
import { MainIntroListType } from '@types/data';

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
        <Typography
          variant="body1"
          sx={{
            fontWeight: theme.typography.fontWeightLight,
            lineHeight: 2,
          }}
        >
          Our computer graphics and image processing laboratory was established
          in 1992. Prof. Yeong-Gil Shin has been leading the research. Since the
          beginning, our focus of research are in the field of 3D visualization,
          reconstruction, and image processing of medical datasets such as CT,
          MRI, PET, and so on.
          <br />
          Recently, we are expanding our research area into inspecting and
          detecting products based on industrial CT, and we have established
          academic collaboration with other institutes and medical centers.
          <br />
          Based on these researches, we have published many research papers and
          commercialized products with the leading ventures.
        </Typography>
        <MainIntroSection title="Graphics" data={graphics} />
        <MainIntroSection title="Imaging" data={imagings} />
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
