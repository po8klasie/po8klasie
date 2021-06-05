import React, { FC } from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import useBasicPageViewTracker from '../../hooks/useBasicPageViewTracker';

const AboutDataPage: FC = () => {
  useBasicPageViewTracker();
  return (
    <ArticleLayout title="O naszych danych">
      <p>Strona w budowie</p>
    </ArticleLayout>
  );
};

export default AboutDataPage;
