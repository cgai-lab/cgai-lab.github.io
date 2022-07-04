import React from 'react';
import styled from '@emotion/styled';

const Section = ({ title }: { title: string }) => {
  return (
    <SectionContainer>
      <div className="sectionDiv">PEOPLE</div>
      <h2 className="sectionH2">{title}</h2>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: center;

  & .sectionDiv {
    opacity: 0.6;
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  & .sectionH2 {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 36px;
    line-height: 50px;
    font-weight: 400;
  }
`;

export default Section;
