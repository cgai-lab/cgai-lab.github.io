import React from 'react';

import Layout from '@components/Layout';
import { Box, Container, List } from '@mui/material';
import { graphql } from 'gatsby';
import { ProjectListType } from '@types/data';
import ProjectItem from '@components/project/ProjectItem';
import TitleSection from '@components/TitleSection';

const PublicationsPage = ({
  data: {
    projectList: { edges },
  },
}: ProjectListType) => {
  return (
    <Layout>
      <Container>
        <TitleSection title="Project" subTitle="" />
        <Box py={2}>
          <List>
            {edges.map(({ node }) => (
              <ProjectItem key={node.id} {...node} />
            ))}
          </List>
        </Box>
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query {
    projectList: allContentfulProject(
      sort: { fields: startDate, order: DESC }
    ) {
      edges {
        node {
          id
          title
          option
          startDate(formatString: "YYYY-MM")
          endDate(formatString: "YYYY-MM")
        }
      }
    }
  }
`;

export default PublicationsPage;
