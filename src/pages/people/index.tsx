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
  const students = edges.filter((person) => person.node.type === 'student');
  const alumnis = edges.filter((person) => person.node.type === 'alumni');

  return (
    <Layout>
      <Container>
        <PeopleSection title="Faculty" />
        <PeopleContainer people={professor} />
        <PeopleSection title="Students" />
        <PeopleContainer people={students} />
        <PeopleSection title="Alumni" />
        <PeopleContainer people={alumnis} />
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
            url
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
