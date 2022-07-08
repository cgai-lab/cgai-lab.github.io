import React from 'react';

import Layout from '@components/Layout';
import { List } from '@mui/material';
import { graphql } from 'gatsby';
import { PaperListType } from '@types/data';
import ResearchItem from '@components/research/ReasearchItem';

const ResearchPage = ({
  data: {
    paperList: { nodes },
  },
}: PaperListType) => {
  console.log(nodes);

  return (
    <Layout>
      <List>
        {nodes.map((item) => (
          <ResearchItem key={item.id} {...item} />
        ))}
      </List>
    </Layout>
  );
};

export const data = graphql`
  query {
    paperList: allContentfulPaper(sort: { fields: date, order: DESC }) {
      nodes {
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
`;

export default ResearchPage;
