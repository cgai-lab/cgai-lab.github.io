import React from 'react';

import Layout from '@components/Layout';
import PeopleSection from '@components/people/PeopleSection';
import PeopleContainer from '@components/people/PeopleContainer';
import { PersonsType } from '@types/graph';
import { graphql } from 'gatsby';
import { Container } from '@mui/material';

const PeoplePage = ({
  data: {
    allContentfulPerson: { edges },
  },
}: PersonsType) => {
  const professor = edges.filter((person) => person.node.type === 'professor');
  const student = edges.filter((person) => person.node.type === 'student')[0];
  const students = Array(9)
    .fill(1)
    .map(() => ({ ...student }));

  return (
    <Layout>
      <Container>
        <PeopleSection title="Faculty" />
        <PeopleContainer people={professor} />
        <PeopleSection title="Students" />
        <PeopleContainer people={students} />
        <PeopleSection title="Alumni" />
        <PeopleContainer people={students} />
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query {
    allContentfulPerson {
      edges {
        node {
          id
          image {
            publicUrl
            title
          }
          course
          description
          endDate
          name
          startDate
          type
          url
        }
      }
    }
  }
`;

export default PeoplePage;
