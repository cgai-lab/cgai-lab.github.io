import { List, ListItem, ListSubheader, Typography } from '@mui/material';
import React from 'react';

const SummaryInfo = ({
  title,
  contents,
}: {
  title: string;
  contents: { content: string }[];
}) => {
  return (
    <List>
      <Typography variant="h5" py={2}>
        {title}
      </Typography>
      {contents.map(({ content }) => (
        <ListItem key={content}>◾ {content}</ListItem>
      ))}
    </List>
  );
};

export default SummaryInfo;
