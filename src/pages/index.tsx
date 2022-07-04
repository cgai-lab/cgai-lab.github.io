import { Button, Container, Typography, useTheme } from '@mui/material';
import React from 'react';

import Layout from '@components/Layout';
import Seo from '@components/Seo';
import TopSection from '@components/TopSection';
import MainSlide from '@components/main/MainSlide';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <MainSlide />
      </Container>
    </Layout>
  );
};

export default IndexPage;
