import { Grid } from '@mui/material';
import { PersonType } from '@types/data';
import React from 'react';
import PersonContent from './PersonContent';

const PeopleContainer = ({
  people,
  isCenter,
}: {
  people: PersonType[];
  isCenter?: boolean;
}) => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent={isCenter ? 'center' : 'flex-start'}
    >
      {people.map((item) => (
        <PersonContent key={item.node.id} {...item} />
      ))}
    </Grid>
  );
};

export default PeopleContainer;
