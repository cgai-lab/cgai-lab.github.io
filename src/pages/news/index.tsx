import React from 'react';

import Layout from '@components/Layout';
import TopSection from '@components/TopSection';
import { graphql } from 'gatsby';
import { NewsType } from '@types/data';
import { Container, List } from '@mui/material';
import NewsItem from '@components/news/NewsItem';

function NewsPage({ data }: NewsType) {
  const boards = data.news.nodes;
  return (
    <Layout>
      {/* <TopSection title="News" /> */}
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
