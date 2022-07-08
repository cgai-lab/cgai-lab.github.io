import { BoardType } from '@types/data';
import React from 'react';
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  ListItem,
} from '@mui/material';
import { Link } from 'gatsby';

const NewsItem = (board: BoardType) => {
  console.log(board.slug);

  return (
    <ListItem sx={{ display: 'inline-block' }}>
      <Card style={{ border: 'none', boxShadow: 'none' }}>
        <CardActionArea component={Link} to={board.slug}>
          <CardHeader
            title={board.title + board.slug}
            subheader={new Date(board.createdAt).toDateString()}
          />
          <CardMedia component="img" height={500} image={board.thumbnail.url} />
        </CardActionArea>
      </Card>
    </ListItem>
  );
};

export default NewsItem;
