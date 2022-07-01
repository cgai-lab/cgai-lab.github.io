import { Button, Container, Typography, useTheme } from '@mui/material';
import React from 'react';

import Layout from '@components/Layout';
import Seo from '@components/Seo';
import TopSection from '@components/TopSection';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <TopSection title="Home" />
      <Typography>
        1231231231sadfasfasdfasdfsadfasdfasdfasdfasdfasdfasdf
      </Typography>
      <Button variant="contained">123123123123</Button>
    </Layout>
  );
};

export default IndexPage;
