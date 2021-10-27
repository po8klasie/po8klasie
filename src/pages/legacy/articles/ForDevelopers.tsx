import React, { FC } from 'react';
import ArticleLayout from '../../../components/ArticleLayout';
import useBasicPageViewTracker from '../../../hooks/useBasicPageViewTracker';

const ForDevelopersPage: FC = () => {
  useBasicPageViewTracker();
  return (
    <ArticleLayout title="Dla deweloperów">
      <p>
        Projekt udostępniony jest w serwisie{' '}
        <a href="https://github.com/po8klasie" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        na licencji open-source.
      </p>
    </ArticleLayout>
  );
};

export default ForDevelopersPage;
