import { List, ListItem, ListSubheader, Typography } from '@mui/material';
import React from 'react';

const SummaryInfo = ({
  title,
  contents,
}: {
  title: string;
  contents: { content: string; node?: React.ReactNode }[];
}) => {
  return (
    <List>
      <Typography variant="h5" py={2}>
        {title}
      </Typography>
      {contents.map(({ content, node }) => (
        <ListItem key={content}>◾ {node ? node : content}</ListItem>
      ))}
    </List>
  );
};

export default SummaryInfo;
