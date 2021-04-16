import React, { FC } from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import { useBasicPageViewTracker } from '../../utils/analytics';

const PrivacySettingsPage: FC = () => {
  useBasicPageViewTracker();
  return (
    <ArticleLayout title="Ustawienia prywatności">
      <p>Strona w budowie</p>
    </ArticleLayout>
  );
};

export default PrivacySettingsPage;
