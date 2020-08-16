import React, { FC, lazy } from 'react';
import { Redirect, Router } from '@reach/router';
import LandingPage from './pages/LandingPage';
import SchoolPage from './pages/SchoolPage';
import SchoolsPage from './pages/SchoolsPage';
import lazyLoaded from './utils/lazyLoaded';
import SchoolsGridPage from './pages/SchoolsGridPage';
import SchoolsMapPage from './pages/SchoolsMapPage';

const Calculator = lazyLoaded(lazy(() => import('./pages/Calculator')));
const ForDevelopersPage = lazyLoaded(
  lazy(() => import('./pages/articles/ForDevelopers')),
);
const GetInvolvedPage = lazyLoaded(
  lazy(() => import('./pages/articles/GetInvolved')),
);
const AboutDataPage = lazyLoaded(
  lazy(() => import('./pages/articles/AboutData')),
);
const PrivacySettingsPage = lazyLoaded(
  lazy(() => import('./pages/articles/PrivacySettings')),
);
const PrivacyPolicyPage = lazyLoaded(
  lazy(() => import('./pages/articles/PrivacyPolicy')),
);
const Routes: FC = () => (
  <Router>
    <LandingPage path="/" />
    <SchoolsPage path="/schools-old" />
    <Redirect from="/schools" to="/schools/grid" />
    <SchoolsGridPage path="/schools/grid" />
    <SchoolsMapPage path="/schools/map" />
    <SchoolPage path="/school/:schoolID" />
    <Calculator path="/calculator" />

    <ForDevelopersPage path="/for-developers" />
    <GetInvolvedPage path="/get-involved" />
    <AboutDataPage path="/about-data" />

    <PrivacyPolicyPage path="/privacy-policy" />
    <PrivacySettingsPage path="/privacy-settings" />
  </Router>
);

export default Routes;
