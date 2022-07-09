import React from 'react';

import Layout from '@components/Layout';
import { Box, Button, ButtonGroup, Container, List } from '@mui/material';
import { graphql } from 'gatsby';
import { PaperListType } from '@types/data';
import ResearchItem from '@components/research/ReasearchItem';

const ResearchPage = ({
  data: {
    paperList: { edges },
  },
}: PaperListType) => {
  return (
    <Layout>
      <Container>
        <Box px={2}>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button style={{ textTransform: 'none' }}>All</Button>
            <Button style={{ textTransform: 'none' }}>Patent</Button>
            <Button style={{ textTransform: 'none' }}>
              International Journal
            </Button>
            <Button style={{ textTransform: 'none' }}>
              International Conference
            </Button>
            <Button style={{ textTransform: 'none' }}>Domestic Journal</Button>
            <Button style={{ textTransform: 'none' }}>
              Domestic Conference
            </Button>
          </ButtonGroup>
        </Box>
        <List>
          {edges.map(({ node }) => (
            <ResearchItem key={node.id} {...node} />
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query {
    paperList: allContentfulPaper(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          option
          page
          title
          type
          url
          withPerson
          date(formatString: "YYYY-MM")
        }
      }
    }
  }
`;

export default ResearchPage;
