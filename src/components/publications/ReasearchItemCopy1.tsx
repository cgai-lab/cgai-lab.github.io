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
import React, { useEffect, useState } from 'react';
import PersonChip from './chip/PersonChip';
import TypeChip from './chip/TypeChip';
import LinkIcon from '@mui/icons-material/Link';

const ResearchItem = ({
  title,
  date,
  type,
  option,
  url,
  withPerson,
  doi,
}: PaperType) => {
  return (
    <li>
      {url && (
        <a href={doi ? `https://doi.org${doi}` : url}>
          <LinkIcon
            sx={{
              width: 16,
              height: 16,
              marginX: 0.3,
              verticalAlign: 'middle',
            }}
            color="primary"
          />
        </a>
      )}
      {withPerson &&
        withPerson.map((item) => <span key={item}>{item},&nbsp;</span>)}
      <span>
        {'"'}
        <b>{title}</b>
        {'"'}
      </span>
      {option && option.map((item) => <span key={item}>,&nbsp;{item}</span>)}
      {doi && <span>,&nbsp;{doi}</span>}
    </li>
  );
  return (
    <li>
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
    </li>
  );
};

export default ResearchItem;
