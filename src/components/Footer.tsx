import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import styled from '@emotion/styled';

const Footer = () => {
  const theme = useTheme();
  return (
    <FooterWrapper
      component="footer"
      mt={8}
      py={4}
      sx={{ bgcolor: theme.palette.grey[100] }}
    >
      <Container>
        <Grid container rowSpacing={3}>
          <Grid item xs={12} md={9}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
              Contact info
            </Typography>
            <Typography variant="caption">
              Room 328, Mirae Hall (No. 60),
            </Typography>
            <br />
            <Typography variant="caption">
              Computer Science and Engineering, Seoul National University of
              Science and Technology
            </Typography>
            <br />
            <Typography variant="caption">
              232, Gongneung-ro, Nowon-gu, Seoul, Republic of Korea
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{ textAlign: { sx: 'start', md: 'end', lg: 'end' } }}
          >
            <Typography
              variant="subtitle2"
              sx={{ display: 'inline-block', fontWeight: 'bold' }}
            >
              TEL:
            </Typography>
            <Typography variant="caption"> (+82)-2-970-6719</Typography>
            <br />
            <Typography
              variant="subtitle2"
              sx={{ display: 'inline-block', fontWeight: 'bold' }}
            >
              FAX:
            </Typography>
            <Typography variant="caption"> (+82)-2-970-9734</Typography>
            <Box>
              <Typography
                variant="caption"
                component="a"
                href="mailto:dongwann@seoultech.ac.kr"
              >
                dongwann@seoultech.ac.kr
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(Box)``;

export default Footer;
