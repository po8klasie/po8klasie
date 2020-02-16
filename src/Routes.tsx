import React, { FC } from 'react';
import { Router } from '@reach/router';
import LandingPage from './pages/LandingPage';
import SchoolPage from './pages/SchoolPage';
import SchoolsPage from './pages/SchoolsPage';

const Routes: FC = () => (
  <Router>
    <LandingPage path="/" />
    <SchoolsPage path="/schools" />
    <SchoolPage path="/school/:schoolID" />
  </Router>
);

export default Routes;
