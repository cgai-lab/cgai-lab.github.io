import React from 'react';

import Layout from '@components/Layout';
import Seo from '@components/Seo';
import { Button, Container, useTheme } from '@mui/material';

// markup
const IndexPage = () => {
  console.log(useTheme());
  return (
    <Layout>
      <Button variant="contained">hi</Button>
    </Layout>
  );
};

export default IndexPage;
