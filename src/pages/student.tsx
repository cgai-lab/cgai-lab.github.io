import Layout from '@components/Layout';
import React from 'react';

import { graphql } from 'gatsby';

const Student = () => {
  return <div>{1}</div>;
};

export const data = graphql`
  query MyQuery {
    allContentfulStudent {
      edges {
        node {
          id
          endDate
          description
          createdAt
          contentful_id
          name
          url
        }
      }
    }
  }
`;

export default Student;
