import React, { FC } from 'react';
import ArticleLayout from '../../components/ArticleLayout';

const ForDevelopersPage: FC = () => (
  <ArticleLayout title="Dla deweloperów">
    <p>
      Na stronie{' '}
      <a href="https://oss.warsawlo.pl" target="_blank" rel="noopener noreferrer">
        oss.warsawlo.pl
      </a>{' '}
      można znaleźć dokumentację projektu.
    </p>
    <p>
      Zachęcamy też do przyjrzenia się bliżej naszym repozytoriom udostępnionym w serwisie{' '}
      <a href="https://github.com/WarsawLO" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      .
    </p>
  </ArticleLayout>
);

export default ForDevelopersPage;
