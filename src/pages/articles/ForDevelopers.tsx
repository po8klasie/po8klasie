import React, { FC } from 'react';
import ArticleLayout from '../../components/ArticleLayout';

const ForDevelopersPage: FC = () => (
  <ArticleLayout title={'Dla deweloperów'}>
    <p>
      Zachęcamy do przyjrzenia się bliżej naszym repozytoriom udostępnionym w
      serwisie Github.
      <br />
      Wkrótce udostępnimy szczegółową dokumentację projektu.
    </p>
  </ArticleLayout>
);

export default ForDevelopersPage;
