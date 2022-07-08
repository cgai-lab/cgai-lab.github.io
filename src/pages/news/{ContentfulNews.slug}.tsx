import Layout from '@components/Layout';
import { Container, Typography } from '@mui/material';
import { BoardType } from '@types/data';
import { graphql } from 'gatsby';
import React from 'react';

interface IProps {
  data: {
    contentfulNews: BoardType;
  };
}

const BoardPage = ({
  data: {
    contentfulNews: { id, title, createdAt, content, thumbnail },
  },
}: IProps) => {
  return (
    <Layout>
      <Container>
        <Typography variant="h2">{title}</Typography>

        <img src={thumbnail.url} />
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query ($slug: String!) {
    contentfulNews(slug: { eq: $slug }) {
      id
      slug
      title
      updatedAt(formatString: "YYYY-MM-DD")
      createdAt(formatString: "YYYY-MM-DD")
      content {
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        url
      }
    }
  }
`;

export default BoardPage;
