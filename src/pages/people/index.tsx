import React from 'react';

import Layout from '@components/Layout';
import TitleSection from '@components/TitleSection';
import PeopleContainer from '@components/people/PeopleContainer';
import { PersonsType } from '@types/data';
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
        <TitleSection title="Faculty" />
        <PeopleContainer people={professor} isCenter />
        <TitleSection title="Students" />
        <PeopleContainer people={students} />
        <TitleSection title="Alumni" />
        <PeopleContainer people={alumnis} />
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query {
    allContentfulPerson(
      sort: { fields: [course, startDate], order: [DESC, ASC] }
    ) {
      edges {
        node {
          id
          personalUrl
          image {
            url
            title
          }
          course
          name
          type
        }
      }
    }
  }
`;

export default PeoplePage;
