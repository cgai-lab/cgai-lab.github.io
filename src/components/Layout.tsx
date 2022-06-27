import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  font-family: 'Montserrat, sans-serif, Roboto';
  background-color: red;
`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
