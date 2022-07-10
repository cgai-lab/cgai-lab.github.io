import { BoardType } from '@types/data';
import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  ListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'gatsby';
import theme from 'src/theme';

const NewsItem = (board: BoardType) => {
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <ListItem sx={{ display: 'inline-block' }}>
      <Box sx={{ boxShadow: 4, borderRadius: 1 }}>
        <Card style={{ border: 'none', boxShadow: 'none' }}>
          <CardActionArea component={Link} to={board.slug}>
            <CardHeader
              style={{ fontFamily: theme.typography.fontFamily }}
              title={board.title}
              subheader={new Date(board.createdAt).toDateString()}
            />
            <CardContent sx={{ padding: 0 }}>
              <CardMedia
                component="img"
                height={lg ? 300 : 200}
                image={board.thumbnail.url}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </ListItem>
  );
};

export default NewsItem;
