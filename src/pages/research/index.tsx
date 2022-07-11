import React, { useState } from 'react';

import Layout from '@components/Layout';
import {
  Box,
  Container,
  List,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { graphql } from 'gatsby';
import { PaperListType } from '@types/data';
import ResearchItem from '@components/research/ReasearchItem';
import TitleSection from '@components/TitleSection';

const ResearchPage = ({
  data: {
    paperList: { edges },
  },
}: PaperListType) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
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
        <TitleSection title="Research" subTitle="research" />
        <Box px={2}>
          <ToggleButtonGroup
            value={value}
            fullWidth
            orientation={md ? 'horizontal' : 'vertical'}
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
        <Box py={2}>
          <List>
            {edges &&
              edges
                .filter((item) => {
                  if (value === 'All') return item;
                  if (item.node.type === value) return item;
                })
                .map(({ node }) => <ResearchItem key={node.id} {...node} />)}
          </List>
        </Box>
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
