import React, { FC } from 'react';
import { Router } from '@reach/router';
import LandingPage from './pages/LandingPage';
import SchoolPage from './pages/SchoolPage';
import SchoolsPage from './pages/SchoolsPage';
import Calculator from "./pages/Calculator";

const Routes: FC = () => (
  <Router>
    <LandingPage path="/" />
    <SchoolsPage path="/schools" />
    <SchoolPage path="/school/:schoolID" />
    <Calculator path="/calculator" />
  </Router>
);

export default Routes;
