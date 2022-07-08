import { graphql } from 'gatsby';
import React from 'react';

const BoardPage = ({ data }) => {
  console.warn(data);

  return <div>123</div>;
};

export const data = graphql`
  query MyQuery($id: String) {
    allContentfulNews(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        createdAt
        content {
          content
        }
        thumbnail {
          id
          url
        }
      }
    }
  }
`;

export default BoardPage;
