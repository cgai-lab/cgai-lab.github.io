import React from 'react';

import Layout from '@components/Layout';
import { Container, Typography, Box, useTheme } from '@mui/material';
import TitleSection from '@components/TitleSection';
import SummaryInfo from '@components/professor/SummaryInfo';

const edus = [
  { content: '중앙대학교 컴퓨터공학과, 공학사, 2006년 2월' },
  { content: '중앙대학교 컴퓨터공학과, 공학박사, 2013년 2월' },
  {
    content: '중앙대학교 연구교수, 서울대/숙명여대 시간강사, 2013.03 ~ 2015.06',
  },
  {
    content:
      'Bournemouth University, Visiting Researcher, 2015.07 ~ 2017.08 영국',
  },
  {
    content:
      'Bournemouth University, Marie Curie Fellow (EU), 2018.02 ~ 2018.08 영국',
  },
];

const areas = [
  {
    content: '컴퓨터그래픽스',
  },
  {
    content: '영상처리',
  },
  {
    content: '감성컴퓨팅',
  },
];

const honors = [
  {
    content:
      'Best paper award "Honorable mention", NPAR 2011: Animation for ancient tile mosaics',
  },
  {
    content: `Seal of Excellence, Horizon 2020's Marie Skłodowska-Curie actions, 2017: AniStyle - Artistic Animation Rendering with Stylization`,
  },
];

const AboutPage = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Container>
        <TitleSection
          title={
            <Box>
              <img
                height={250}
                src="https://computer.seoultech.ac.kr/storage/prof/profile/SNUST1537403560837.jpg"
              />
              <Typography
                variant="h4"
                py={1}
                sx={{ fontWeight: theme.typography.fontWeightBold }}
              >
                Dongwann Kang
              </Typography>
              <Typography variant="body1" py={1}>
                <b>Professor</b>, Computer Graphcis and Image Processing
                Laboratory
              </Typography>
              <Typography variant="body1" py={1}>
                Seoul National University of Science and Technology
              </Typography>
              <Typography variant="body1" py={1}>
                dongwann@seoultech.ac.kr
              </Typography>
            </Box>
          }
          subTitle="professor"
        />
        <SummaryInfo title="Education" contents={edus} />
        <SummaryInfo title="Research Area" contents={areas} />
        <SummaryInfo title="Honors" contents={honors} />
      </Container>
    </Layout>
  );
};

export default AboutPage;
