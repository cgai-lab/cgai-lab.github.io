import React, { useState } from 'react';

import Layout from '@components/Layout';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  List,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { graphql } from 'gatsby';
import { PaperListType } from '@types/data';
import ResearchItem from '@components/research/ReasearchItem';

const ResearchPage = ({
  data: {
    paperList: { edges },
  },
}: PaperListType) => {
  const [value, setValue] = useState('All');
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string,
  ) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Container>
        <Box px={2}>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            value={value}
            exclusive
            onChange={handleChange}
            aria-label="outlined primary button group"
          >
            <ToggleButton style={{ textTransform: 'none' }} value="All">
              All
            </ToggleButton>
            <ToggleButton style={{ textTransform: 'none' }} value="Patent">
              Patent
            </ToggleButton>
            <ToggleButton
              style={{ textTransform: 'none' }}
              value="International Journal"
            >
              International Journal
            </ToggleButton>
            <ToggleButton
              style={{ textTransform: 'none' }}
              value="International Conference"
            >
              International Conference
            </ToggleButton>
            <ToggleButton
              style={{ textTransform: 'none' }}
              value="Domestic Journal"
            >
              Domestic Journal
            </ToggleButton>
            <ToggleButton
              style={{ textTransform: 'none' }}
              value="Domestic Conference"
            >
              Domestic Conference
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <List>
          {edges &&
            edges
              .filter((item) => {
                if (value === 'All') return item;
                if (item.node.type === value) return item;
              })
              .map(({ node }) => <ResearchItem key={node.id} {...node} />)}
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
