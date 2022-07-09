import {
  Box,
  Breadcrumbs,
  Card,
  CardActionArea,
  CardHeader,
  ListItem,
  Typography,
} from '@mui/material';
import { ProjectType } from '@types/data';
import { Link } from 'gatsby';
import React from 'react';

const ProjectItem = ({ title, startDate, endDate, option }: ProjectType) => {
  return (
    <ListItem sx={{ display: 'inline-block' }}>
      <Box sx={{ boxShadow: 4, borderRadius: 1 }}>
        <Card style={{ border: 'none', boxShadow: 'none' }}>
          <CardActionArea>
            <CardHeader
              title={<Typography variant="h6">{title}</Typography>}
              subheader={
                <Breadcrumbs aria-label="breadcrum">
                  {option &&
                    option.map((item) => (
                      <Typography key={item} variant="subtitle2">
                        {item}
                      </Typography>
                    ))}
                  <Typography variant="subtitle2">
                    {startDate} ~ {endDate}
                  </Typography>
                </Breadcrumbs>
              }
            />
          </CardActionArea>
        </Card>
      </Box>
    </ListItem>
  );
};

export default ProjectItem;
