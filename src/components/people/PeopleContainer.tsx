import { Grid } from '@mui/material';
import { PersonType } from '@types/graph';
import React from 'react';
import PersonContent from './PersonContent';

const PeopleContainer = ({ people }: { people: PersonType[] }) => {
  return (
    <Grid container spacing={2}>
      {people.map((item) => (
        <PersonContent key={item.node.id} {...item} />
      ))}
    </Grid>
  );
};

export default PeopleContainer;
