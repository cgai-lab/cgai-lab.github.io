import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

const MainCard = ({
  title,
  content,
  imgUrl,
}: {
  title: string;
  content: string;
  imgUrl: string;
}) => {
  return (
    <Card sx={{ ':hover': { boxShadow: 10 } }}>
      <CardActionArea>
        <CardMedia component="img" image={imgUrl} height={200} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" height={100}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MainCard;
