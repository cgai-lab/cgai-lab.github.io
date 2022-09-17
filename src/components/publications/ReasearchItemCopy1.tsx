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
        <Link to={doi ? `https://doi.org${doi}` : url} target="_blank">
          <LinkIcon
            sx={{
              width: 16,
              height: 16,
              marginX: 0.3,
              verticalAlign: 'middle',
            }}
            color="primary"
          />
        </Link>
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
};

export default ResearchItem;
