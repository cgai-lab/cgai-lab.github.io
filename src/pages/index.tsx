import { Container, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';

import Layout from '@components/Layout';
import MainSlide from '@components/main/MainSlide';
import { graphql } from 'gatsby';
import { MainIntroListType } from '@types/data';
import TitleSection from '@components/TitleSection';
import MainAboutWork from '@components/main/MainAboutWork';

const IndexPage = ({
  data: {
    mainIntroList: { edges },
  },
}: MainIntroListType) => {
  const theme = useTheme();
  // const graphics = edges.filter(({ node }) => node.type === true);
  // const imagings = edges.filter(({ node }) => node.type === false);

  return (
    <Layout>
      <MainSlide />

      <Container>
        <TitleSection
          title={
            <Typography variant="h6" sx={{ textAlign: 'left', lineHeight: 2 }}>
              &nbsp;Our laboratory develops technology for handling and
              enhancing visual data. This includes three-dimensional computer
              graphics, computer imaging and vision, visual perception, and
              computational aesthetics.
            </Typography>
          }
          subTitle="Introduction"
        />
        <Divider />
        <MainAboutWork
          isLeft={true}
          title="Computer Graphics"
          src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
          content="Computer graphics is a sub-field of computer science which studies methods for digitally synthesizing and manipulating visual content. Although the term often refers to the study of three-dimensional computer graphics, it also encompasses two-dimensional graphics and image processing."
        />
        <MainAboutWork
          isLeft={false}
          title="Computer Imaging"
          src="https://cdn.pixabay.com/photo/2021/12/18/19/37/eye-6879642_960_720.jpg"
          content="Computer imaging is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to understand and automate tasks that the human visual system can do."
        />
        <Divider sx={{ marginTop: 4 }} />
        <TitleSection
          title={
            <Typography
              variant="subtitle1"
              sx={{ textAlign: 'left', lineHeight: 2 }}
            >
              PostDoc position
              <br />
              We have an opening for a collaborative postdoctoral fellow who
              would contribute to top quality computer graphics and imaging
              research. Feel free to contact Prof Kang.
              <br />
              <br />
              Graduate students
              <br />
              Please do not hesitate to contact us, if you are looking for
              research opportunities for your MS or PhD studies on the cutting
              edge of visual computing. We also invite international students
              holding a BS or MS degree in computer science to apply for the
              Global Korea Scholarship (GKS).
              <br />
              <br />
              Undergraduate internship
              <br />
              컴퓨터 그래픽스 및 이미징 관련 연구 개발 프로젝트들에 참여하는
              것에 관심이 있거나 본교 대학원 진학을 고려중인 학부연구생을 상시
              모집하고 있습니다. 관심이 있으신 분들은 강동완 교수에게 메일
              주세요.
              <br />
              {/* <br />
              <a href="mailto:dongwann@seoultech.ac.kr">
                dongwann@seoultech.ac.kr
              </a> */}
            </Typography>
          }
          subTitle="Open Postions"
        />
      </Container>
    </Layout>
  );
};

export const data = graphql`
  query {
    mainIntroList: allContentfulGraphics {
      edges {
        node {
          content
          title
          img {
            url
          }
          id
          type
        }
      }
    }
  }
`;

export default IndexPage;
