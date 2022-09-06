import {
  Box,
  Breadcrumbs,
  Card,
  CardActionArea,
  CardHeader,
  ListItem,
  Typography,
  // useTheme,
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
  // const theme = useTheme();
  return (
    <ListItem sx={{ display: 'inline-block' }}>
      <Box sx={{ boxShadow: 4, borderRadius: 1 }}>
        <Card style={{ border: 'none', boxShadow: 'none' }}>
          <CardActionArea component={url ? Link : 'div'} to={url ? url : ''}>
            <CardHeader
              title={
                <Box>
                  <TypeChip item={type} />
                  <Typography variant="h6" pl={1} pt={0.3}>
                    {title}
                  </Typography>
                </Box>
              }
              subheader={
                <>
                  <Box pl={1}>
                    <Box py={0.7}>
                      <Breadcrumbs aria-label="breadcrum">
                        {option &&
                          option.map((item) => (
                            <Typography key={item}>{item}</Typography>
                          ))}
                      </Breadcrumbs>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2">{date}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    {withPerson &&
                      withPerson.map((item) => (
                        // <Typography key={item} component="span">
                        //   {item}
                        // </Typography>
                        <PersonChip key={item} item={item} />
                      ))}
                  </Box>
                </>
              }
            />
          </CardActionArea>
        </Card>
      </Box>
    </ListItem>
  );
};

export default ResearchItem;
