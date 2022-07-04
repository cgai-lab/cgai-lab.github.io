import React from 'react';
import styled from '@emotion/styled';
import { Grid, Box, Typography } from '@mui/material';
import { PersonType } from '@types/graph';

const PersonContent = ({
  node: {
    name,
    image: { publicUrl },
    course,
  },
}: PersonType) => {
  return (
    <PersonContentContainer item xs={12} sm={6} md={4}>
      <Box
        mb={5}
        component="img"
        sx={{
          content: `url(${publicUrl})`,
          width: '100%',
          // height: { xs: 300, sm: 420 },
          objectFit: 'contain',
        }}
      />
      <Box className="content">
        <Typography className="name">{name}</Typography>
        <Typography className="course">{course}</Typography>
      </Box>
    </PersonContentContainer>
  );
};

const PersonContentContainer = styled(Grid)`
  overflow: hidden;
  text-align: center;

  & .content {
    margin-bottom: 30px;
    & .name {
      margin-bottom: 5px;
      opacity: 1;
      font-size: 20px;
      line-height: 34px;
      font-weight: 400;
    }
    & .course {
      opacity: 0.6;
    }
  }
`;
export default PersonContent;
