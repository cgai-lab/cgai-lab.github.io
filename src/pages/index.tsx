import React from 'react';

import Box from '@components/Box';
import Layout from '@components/Layout';
import Seo from '@components/Seo';
import { Button, Container, useTheme } from '@mui/material';

// markup
const IndexPage = () => {
  console.log(useTheme());
  return (
    <Container>
      <Button variant="contained">hi</Button>
    </Container>
  );
};

export default IndexPage;
