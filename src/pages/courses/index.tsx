import React from 'react';

import Layout from '@components/Layout';
import TitleSection from '@components/TitleSection';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import theme from 'src/theme';

const CoursesPage = () => {
  return (
    <Layout>
      <Container>
        <TitleSection title="Spring" subTitle="courses" />
        <List>
          <ListItem alignItems="center" sx={{ textAlign: 'center' }}>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: theme.typography.fontWeightLight,
                    color: theme.palette.grey[600],
                  }}
                >
                  Computer Vision
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ textAlign: 'center' }}>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: theme.typography.fontWeightLight,
                    color: theme.palette.grey[600],
                  }}
                >
                  System Programming
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ textAlign: 'center' }}>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: theme.typography.fontWeightLight,
                    color: theme.palette.grey[600],
                  }}
                >
                  Introducing Programming(1)
                </Typography>
              }
            />
          </ListItem>
        </List>

        <TitleSection title="Fall" subTitle="courses" />
        <List>
          <ListItem sx={{ textAlign: 'center' }}>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: theme.typography.fontWeightLight,
                    color: theme.palette.grey[600],
                  }}
                >
                  Computer Graphics
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ textAlign: 'center' }}>
            <ListItemText
              primary={
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: theme.typography.fontWeightLight,
                    color: theme.palette.grey[600],
                  }}
                >
                  Introducing Programming(2)
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default CoursesPage;
