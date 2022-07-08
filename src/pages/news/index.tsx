import React from 'react';

import Layout from '@components/Layout';
import TopSection from '@components/TopSection';
import { graphql } from 'gatsby';
import { NewsType } from '@types/data';
import { Container, List } from '@mui/material';
import NewsItem from '@components/news/NewsItem';

function NewsPage({ data }: NewsType) {
  const boards = data.allContentfulNews.nodes;
  return (
    <Layout>
      <TopSection title="News" />
      <Container>
        <List>
          {boards.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </List>
      </Container>
    </Layout>
  );
}

export const data = graphql`
  query {
    allContentfulNews(sort: { fields: createdAt }) {
      nodes {
        id
        title
        updatedAt
        createdAt
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
