import React from 'react';
import styled from '@emotion/styled';
import {
  Grid,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@mui/material';
import { PersonType } from '@types/graph';
import { Link } from 'gatsby';

const PersonContent = ({ node: { name, image, course, url } }: PersonType) => {
  // TODO external and internal linking

  return (
    <PersonContentContainer item xs={12} sm={6} md={6} lg={4}>
      <Card
        sx={{
          maxWidth: 420,
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <CardActionArea component={Link} href={url ? url : ''}>
          <CardMedia
            alt={image.title}
            component="img"
            image={image.url}
            sx={{
              marginBottom: 5,
              borderRadius: 0,
              objectFit: 'auto',
              height: { xs: 300, sm: 420 },
            }}
          />
          <CardContent className="content">
            <Typography className="name">{name}</Typography>
            <Typography className="course">{course}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </PersonContentContainer>
  );
};

const PersonContentContainer = styled(Grid)`
  overflow: hidden;
  text-align: center;

  & .content {
    margin-bottom: 30px;
    & .name {
      margin-bottom: 5px;
      opacity: 1;
      font-size: 20px;
      line-height: 34px;
      font-weight: 400;
    }
    & .course {
      opacity: 0.6;
    }
  }
`;
export default PersonContent;
