import React, { useState } from 'react';

import Layout from '@components/Layout';
import {
  Box,
  Container,
  List,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { graphql } from 'gatsby';
import { PaperListType } from '@types/data';
import ResearchItem from '@components/publications/ReasearchItemCopy';
import TitleSection from '@components/TitleSection';
import { SelectChangeEvent } from '@mui/material';

const DATA = [
  'All',
  'Patent',
  'International Journal',
  'International Conference',
  'Domestic Journal',
  'Domestic Conference',
];

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
  const handleSelectChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <Layout>
      <Container>
        <TitleSection title="Publications" subTitle="" />
        <Box px={2}>
          {md ? (
            <ToggleButtonGroup
              value={value}
              fullWidth
              exclusive
              onChange={handleChange}
              aria-label="outlined primary button group"
            >
              {DATA.map((item) => (
                <ToggleButton
                  key={item}
                  value={item}
                  style={{ textTransform: 'none' }}
                >
                  {item}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          ) : (
            <Select value={value} onChange={handleSelectChange}>
              {DATA.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          )}
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
