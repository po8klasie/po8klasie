import React, { FC, lazy } from 'react';
import { Router } from '@reach/router';
import LandingPage from './pages/LandingPage';
import SchoolPage from './pages/SchoolPage';
import SchoolsPage from './pages/SchoolsPage';
import lazyLoaded from './utils/lazyLoaded';

const Calculator = lazyLoaded(lazy(() => import('./pages/Calculator')));
const ForDevelopersPage = lazyLoaded(
  lazy(() => import('./pages/articles/ForDevelopers')),
);
const GetInvolvedPage = lazyLoaded(
  lazy(() => import('./pages/articles/GetInvolved')),
);
const PrivacyPolicyPage = lazyLoaded(
  lazy(() => import('./pages/articles/PrivacyPolicy')),
);
const Routes: FC = () => (
  <Router>
    <LandingPage path="/" />
    <SchoolsPage path="/schools" />
    <SchoolPage path="/school/:schoolID" />
    <Calculator path="/calculator" />

    <ForDevelopersPage path={'/for-developers'} />
    <GetInvolvedPage path={'/get-involved'} />
    <PrivacyPolicyPage path={'/privacy-policy'} />
  </Router>
);

export default Routes;
