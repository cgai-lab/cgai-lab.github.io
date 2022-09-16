import React, { useState, useEffect } from 'react';

import Layout from '@components/Layout';
import {
  Box,
  Container,
  List,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { graphql, Link, navigate } from 'gatsby';
import { PaperListType } from '@types/data';
import ResearchItem from '@components/publications/ReasearchItemCopy1';
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
  const [data, setData] = useState();

  // const theme = useTheme();
  useEffect(() => {
    const res = {};
    edges.forEach(({ node }) => {
      const key = node.date.slice(0, 4);
      if (res.hasOwnProperty(key)) {
        res[key].push({ ...node });
      } else {
        res[key] = [{ ...node }];
      }
    });
    setData(res);
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg">
        <TitleSection title="Publications" subTitle="" />
        <Box px={2}>
          {md ? (
            <ToggleButtonGroup
              value="Domestic Journal"
              fullWidth
              exclusive
              aria-label="outlined primary button group"
            >
              <ToggleButton
                value="All"
                style={{ textTransform: 'none' }}
                component={Link}
                to="/publications"
              >
                All
              </ToggleButton>
              <ToggleButton
                value="Patent"
                style={{ textTransform: 'none' }}
                component={Link}
                to="/publications/Patent"
              >
                Patent
              </ToggleButton>
              <ToggleButton
                value="International Journal"
                style={{ textTransform: 'none' }}
                component={Link}
                to="/publications/InternationalJournal"
              >
                International Journal
              </ToggleButton>
              <ToggleButton
                value="International Conference"
                style={{ textTransform: 'none' }}
                component={Link}
                to="/publications/InternationalConference"
              >
                International Conference
              </ToggleButton>
              <ToggleButton
                value="Domestic Journal"
                style={{ textTransform: 'none' }}
                component={Link}
                to="/publications/DomesticJournal"
              >
                Domestic Journal
              </ToggleButton>
              <ToggleButton
                value="Domestic Conference"
                style={{ textTransform: 'none' }}
                component={Link}
                to="/publications/DomesticConferencel"
              >
                Domestic Conference
              </ToggleButton>
            </ToggleButtonGroup>
          ) : (
            <Select value="Domestic Journal">
              <MenuItem value="All" component={Link} href="/publications">
                All
              </MenuItem>
              <MenuItem
                value="Patent"
                component={Link}
                to="/publications/Patent"
              >
                Patent
              </MenuItem>
              <MenuItem
                value="International Journal"
                component={Link}
                to="/publications/InternationalJournal"
              >
                International Journal
              </MenuItem>
              <MenuItem
                value="International Conference"
                component={Link}
                to="/publications/InternationalConference"
              >
                International Conference
              </MenuItem>
              <MenuItem
                value="Domestic Journal"
                component={Link}
                to="/publications/DomesticJournal"
              >
                Domestic Journal
              </MenuItem>
              <MenuItem
                value="Domestic Conference"
                component={Link}
                to="/publications/DomesticConferencel"
              >
                Domestic Conference
              </MenuItem>
            </Select>
          )}
        </Box>
        <Box py={2} px={2}>
          {/* <ul>
            {edges &&
              edges
                .filter((item) => {
                  if (value === 'All') return item;
                  if (item.node.type === value) return item;
                })
                .map(({ node }) => <ResearchItem key={node.id} {...node} />)}
          </ul> */}
          {data &&
            Object.keys(data).map((key) => (
              <Box key={key}>
                <Typography variant="h4">{key}</Typography>
                <Box>
                  <ul>
                    {data[key] &&
                      data[key].map((item) => (
                        <ResearchItem key={item.id} {...item} />
                      ))}
                  </ul>
                </Box>
              </Box>
            ))}
        </Box>
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query {
    paperList: allContentfulPublications(
      sort: { fields: date, order: DESC }
      filter: { type: { eq: "Domestic Journal" } }
    ) {
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
          doi
        }
      }
    }
  }
`;

export default ResearchPage;
