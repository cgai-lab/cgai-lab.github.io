import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" my={9} sx={{ textAlign: 'center' }}>
      <Typography sx={{ color: '#32343a', fontSize: '12px', opacity: 0.6 }}>
        made by dongha
      </Typography>
    </Box>
  );
};

export default Footer;
