import React from 'react';
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <TopLayout>{element}</TopLayout>;
};
