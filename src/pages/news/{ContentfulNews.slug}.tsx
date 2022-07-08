import Layout from '@components/Layout';
import styled from '@emotion/styled';
import {
  Avatar,
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Typography,
} from '@mui/material';
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
    contentfulNews: { id, title, createdAt, content, thumbnail, writer },
  },
}: IProps) => {
  return (
    <Layout>
      <Container>
        <Box p={2}>
          <Typography variant="h4" py={1}>
            {title}
          </Typography>

          <Breadcrumbs aria-label="breadcrumb">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
              component="a"
              my={2}
              href={writer.personalUrl}
            >
              <Avatar src={writer.image.url} />

              <Typography variant="subtitle2" pl={1}>
                {writer.name}
              </Typography>
            </Box>

            <Typography variant="subtitle2">{createdAt}</Typography>
          </Breadcrumbs>

          <Divider />

          <MarkdownHtmlInDiv
            py={2}
            component="div"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  );
};

const MarkdownHtmlInDiv = styled(Box)`
  img {
    max-width: 100%;
  }
`;

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
      writer {
        name
        personalUrl
        image {
          url
        }
      }
    }
  }
`;

export default BoardPage;
