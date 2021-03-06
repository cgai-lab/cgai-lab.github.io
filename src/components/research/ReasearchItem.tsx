import {
  Box,
  Breadcrumbs,
  Card,
  CardActionArea,
  CardHeader,
  ListItem,
  Typography,
} from '@mui/material';
import { PaperType } from '@types/data';
import { Link } from 'gatsby';
import React from 'react';
import PersonChip from './chip/PersonChip';
import TypeChip from './chip/TypeChip';

const ResearchItem = ({
  title,
  date,
  type,
  option,
  url,
  withPerson,
}: PaperType) => {
  return (
    <ListItem sx={{ display: 'inline-block' }}>
      <Box sx={{ boxShadow: 4, borderRadius: 1 }}>
        <Card style={{ border: 'none', boxShadow: 'none' }}>
          <CardActionArea component={url ? Link : 'div'} to={url ? url : ''}>
            <CardHeader
              title={<Typography variant="h6">{title}</Typography>}
              subheader={
                <Breadcrumbs aria-label="breadcrum">
                  <TypeChip item={type} />
                  <Box>
                    {withPerson &&
                      withPerson.map((item) => (
                        <PersonChip key={item} item={item} />
                      ))}
                  </Box>
                  <Typography>{date}</Typography>
                  {option &&
                    option.map((item) => (
                      <Typography key={item}>{item}</Typography>
                    ))}
                </Breadcrumbs>
              }
            />
          </CardActionArea>
        </Card>
      </Box>
    </ListItem>
  );
};

export default ResearchItem;
