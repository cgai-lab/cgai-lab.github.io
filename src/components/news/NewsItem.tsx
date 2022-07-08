import { BoardType } from '@types/data';
import React from 'react';
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  ListItem,
} from '@mui/material';

const NewsItem = (board: BoardType) => {
  return (
    <ListItem sx={{ display: 'inline-block' }}>
      <Card style={{ border: 'none', boxShadow: 'none' }}>
        <CardActionArea>
          <CardHeader
            title={board.title}
            subheader={new Date(board.createdAt).toDateString()}
          />
          <CardMedia component="img" height={500} image={board.thumbnail.url} />
        </CardActionArea>
      </Card>
    </ListItem>
  );
};

export default NewsItem;
