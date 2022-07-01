import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

interface IProps {
  title: string;
}

const TopSection = ({ title }: IProps) => {
  return (
    <TopSectionContainer>
      <div className="title">{title}</div>
    </TopSectionContainer>
  );
};

const TopSectionContainer = styled(Box)`
  height: 480px;
  margin-bottom: 100px;
  background-color: #000;
  background-image: none;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  & .title {
    margin-top: 10px;
    margin-bottom: 10px;
    outline-color: #fff;
    outline-offset: 0px;
    outline-style: none;
    outline-width: 3px;
    font-size: 64px;
    line-height: 80px;
    text-transform: none;
    text-shadow: 1px 1px 6px #000;
    mix-blend-mode: normal;
    font-weight: 400;
  }
`;

export default TopSection;
