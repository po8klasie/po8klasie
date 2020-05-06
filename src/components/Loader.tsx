import React from 'react';
import styled from '../styling/styled';
import Layout from './Layout';

const LoaderInnerWrapper = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

export default () => (
  <Layout>
    <LoaderInnerWrapper>Loading...</LoaderInnerWrapper>
  </Layout>
);
