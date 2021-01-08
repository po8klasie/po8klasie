import React, { FC } from 'react';
import styled from '../styling/styled';
import Layout from './Layout';

const LoaderInnerWrapper = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

const Loader: FC = () => (
  <Layout>
    <LoaderInnerWrapper>Loading...</LoaderInnerWrapper>
  </Layout>
);

export default Loader;
