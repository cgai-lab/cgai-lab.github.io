import { Grid } from '@mui/material';
import { PersonType } from '@types/data';
import React from 'react';
import PersonContent from './PersonContent';

const PeopleContainer = ({ people }: { people: PersonType[] }) => {
  return (
    <Grid container spacing={3}>
      {people.map((item) => (
        <PersonContent key={item.node.id} {...item} />
      ))}
    </Grid>
  );
};

export default PeopleContainer;
