import { BoardType } from '@types/data';
import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'gatsby';
import theme from 'src/theme';

const NewsItem = (board: BoardType) => {
  const lg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Grid item xs={12} sm={6} md={6}>
      {/* <Box sx={{ boxShadow: 2, borderRadius: 10 }}> */}
      <Card variant="outlined" sx={{ borderRadius: 5 }}>
        <CardActionArea component={Link} to={board.slug}>
          <CardMedia
            component="img"
            height={lg ? 400 : 300}
            image={board.thumbnail.url}
          />
          <CardContent>
            <CardHeader
              style={{ fontFamily: theme.typography.fontFamily }}
              title={<Typography variant="h6">{board.title}</Typography>}
              sx={{ fontFamily: 'inherit' }}
              subheader={new Date(board.createdAt).toDateString()}
            />
          </CardContent>
        </CardActionArea>
      </Card>
      {/* </Box> */}
    </Grid>
  );
};

export default NewsItem;
