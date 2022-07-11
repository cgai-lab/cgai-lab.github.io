import React from 'react';

import Layout from '@components/Layout';
import { graphql } from 'gatsby';
import { NewsType } from '@types/data';
import { Box, Container, List } from '@mui/material';
import NewsItem from '@components/news/NewsItem';
import TitleSection from '@components/TitleSection';

function NewsPage({ data }: NewsType) {
  const boards = data.news.nodes;
  return (
    <Layout>
      <Container>
        <TitleSection title="News" subTitle="News" />
        <Box py={2}>
          <List>
            {boards.map((item) => (
              <NewsItem key={item.id} {...item} />
            ))}
          </List>
        </Box>
      </Container>
    </Layout>
  );
}

export const data = graphql`
  query {
    news: allContentfulNews(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        title
        slug
        updatedAt(formatString: "YYYY-MM-DD")
        createdAt(formatString: "YYYY-MM-DD")
        thumbnail {
          url
        }
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default NewsPage;
