import React, { FC, lazy } from 'react';
import { Redirect, Router } from '@reach/router';
import LandingPage from './legacyPages/LandingPage';
import SchoolPage from './legacyPages/SchoolPage';
import SchoolsPage from './legacyPages/SchoolsPage';
import lazyLoaded from './utils/lazyLoaded';
import SchoolsGridPage from './legacyPages/SchoolsGridPage';
import SchoolsMapPage from './legacyPages/SchoolsMapPage';
import FavouriteSchoolsPage from './legacyPages/FavouriteSchoolsPage';

const Calculator = lazyLoaded(lazy(() => import('./legacyPages/Calculator')));
const ForDevelopersPage = lazyLoaded(lazy(() => import('./legacyPages/articles/ForDevelopers')));
const GetInvolvedPage = lazyLoaded(lazy(() => import('./legacyPages/articles/GetInvolved')));
const AboutDataPage = lazyLoaded(lazy(() => import('./legacyPages/articles/AboutData')));
const PrivacySettingsPage = lazyLoaded(lazy(() => import('./legacyPages/articles/PrivacySettings')));
const PrivacyPolicyPage = lazyLoaded(lazy(() => import('./legacyPages/articles/PrivacyPolicy')));
const AboutPage = lazyLoaded(lazy(() => import('./legacyPages/AboutPage')));
const NotFoundPage = lazyLoaded(lazy(() => import('./legacyPages/NotFoundPage')));

export const PATH_PREFIX = '/warszawa/legacy';

const LegacyRoutes: FC = () => (
  <Router>
    <LandingPage path={PATH_PREFIX} />
    <SchoolsPage path={`${PATH_PREFIX}/schools-old`} />
    <Redirect from={`${PATH_PREFIX}/schools`} to={`${PATH_PREFIX}/schools/grid`} />
    <SchoolsGridPage path={`${PATH_PREFIX}/schools/grid`} />
    <SchoolsMapPage path={`${PATH_PREFIX}/schools/map`} />
    <SchoolPage path={`${PATH_PREFIX}/school/:schoolID`} />
    <FavouriteSchoolsPage path={`${PATH_PREFIX}/favourite-schools`} />
    <Calculator path={`${PATH_PREFIX}/calculator`} />

    <AboutPage path={`${PATH_PREFIX}/about-us`} />
    <ForDevelopersPage path={`${PATH_PREFIX}/for-developers`} />
    <GetInvolvedPage path={`${PATH_PREFIX}/get-involved`} />
    <AboutDataPage path={`${PATH_PREFIX}/about-data`} />

    <PrivacyPolicyPage path={`${PATH_PREFIX}/privacy-policy`} />
    <PrivacySettingsPage path={`${PATH_PREFIX}/privacy-settings`} />

    <NotFoundPage default />
  </Router>
);

export default LegacyRoutes;
