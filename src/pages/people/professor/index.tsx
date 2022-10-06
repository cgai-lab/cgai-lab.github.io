import React from 'react';

import Layout from '@components/Layout';
import { Container, Typography, Box, useTheme, Divider } from '@mui/material';
import TitleSection from '@components/TitleSection';
import SummaryInfo from '@components/professor/SummaryInfo';

const edus = [
  // { content: '중앙대학교 컴퓨터공학과, 공학사, 2006년 2월' },
  // { content: '중앙대학교 컴퓨터공학과, 공학박사, 2013년 2월' },
  // {
  //   content: '중앙대학교 연구교수, 서울대/숙명여대 시간강사, 2013.03 ~ 2015.06',
  // },
  // {
  //   content:
  //     'Bournemouth University, Visiting Researcher, 2015.07 ~ 2017.08 영국',
  // },
  // {
  //   content:
  //     'Bournemouth University, Marie Curie Fellow (EU), 2018.02 ~ 2018.08 영국',
  // },
  {
    content: '',
    node: (
      <>
        Ph.D. Computer Graphics, Feb 2013
        <br /> Department of Computer Science and Engineering, Chung-Ang
        University, Seoul, Korea
        <br />
        Thesis: A study on maintaining the temporal coherence of stroke based
        non-photorealistic animation : focused on the flickering and the shower
        door effect`,
      </>
    ),
  },
  {
    content: '',
    node: (
      <>
        {' '}
        B.S. Computer Science and Engineering, Feb 2006
        <br />
        Department of Computer Science and Engineering, Chung-Ang University,
        Seoul, Korea
      </>
    ),
  },
];

const experiences = [
  {
    content:
      'Marie Curie Fellow (supported by EU), Bournemouth University, UK, Feb 2018 - Aug 2018 (self-terminated to join the SeoulTech)',
  },
  {
    content:
      'Visiting Researcher (supported by NRF), Bournemouth University, UK, Jul 2015 - Aug 2017',
  },
  {
    content:
      'Research Fellow, Chung-Ang University, Seoul, Korea, Mar 2013 - Jun 2015, Sep 2017 - Jan 2018',
  },
];

const teachings = [
  { content: 'Seoul National University, Seoul, Korea, Mar 2014 - Jun 2015' },
  {
    content: "Sookmyung Women's University, Seoul, Korea, Mar 2014 - Dec 2014",
  },
];

const awardAndHonours = [
  {
    content: `Seal of Excellence, "AniStyle - Artistic Animation Rendering with Stylization", Horizon 2020's Marie Skłodowska-Curie actions, 2017`,
  },
  {
    content: `Honorable mention, "Animation for ancient tile mosaics", NPAR 2011`,
  },
];

const academicServices = [
  {
    content: `Associate Editor, Journal of Information Processing Systems, 2021 - Present`,
  },
  {
    content: `Guest Editor, New Review of Hypermedia and Multimedia, Special Issue on Advances in Multimedia and Educational Technology, Vol.25, No.3, February 2020 (co-editor)`,
  },
  {
    content: `Program Committee, Computer Animation & Social Agents, 2020, 2021`,
  },
  {
    content: `Program Committee, International Workshop on Computer Image and its Applications, 2014, 2015, 2017, 2018, 2019, 2021, 2022`,
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
                variant="h5"
                py={2}
                sx={{ fontWeight: theme.typography.fontWeightBold }}
              >
                Dongwann Kang
              </Typography>
              <Typography variant="body1" py={1}>
                <b>Assistant Professor</b>, Department of Computer Science and
                Engineering,
              </Typography>
              <Typography variant="body1" py={1}>
                Seoul National University of Science and Technology (SeoulTech),
                Seoul, Korea (Sep 2018 - Present)
              </Typography>
              <Typography variant="body1" py={1}>
                Phone: (+82)-2-970-6719
              </Typography>
              <Typography variant="body1" py={1}>
                Fax: (+82)-2-970-9734
              </Typography>
              <Typography variant="body1" py={1}>
                <a href="mailto:dongwann@seoultech.ac.kr">
                  dongwann@seoultech.ac.kr
                </a>
              </Typography>
            </Box>
          }
          subTitle="professor"
        />
        <Divider sx={{ paddingY: 2 }} />
        <SummaryInfo title="Education" contents={edus} />
        <Divider sx={{ paddingY: 2 }} />
        <SummaryInfo title="Experience" contents={experiences} />
        <Divider sx={{ paddingY: 2 }} />
        <SummaryInfo title="Teaching" contents={teachings} />
        <Divider sx={{ paddingY: 2 }} />
        <SummaryInfo title="Awards and Honours" contents={awardAndHonours} />
        <Divider sx={{ paddingY: 2 }} />
        <SummaryInfo title="Academic Services" contents={academicServices} />
      </Container>
    </Layout>
  );
};

export default AboutPage;
