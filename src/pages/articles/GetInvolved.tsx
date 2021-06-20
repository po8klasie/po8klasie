import React, { FC } from 'react';
import ArticleLayout from '../../components/ArticleLayout';
import useBasicPageViewTracker from '../../hooks/useBasicPageViewTracker';

const GetInvolvedPage: FC = () => {
  useBasicPageViewTracker();
  return (
    <ArticleLayout title="Pomóż nam!">
      <p>
        Hej, doceniamy, że chcesz włączyć się w naszą pracę. To wiele znaczy. Możesz pomóc (może
        nawet wszystkim) przyszłym uczniom warszawskich szkół średnich!
      </p>
      <p>
        Poniżej przedstawiamy kilka sposobów na twój wkład, lecz jeśli masz inny pomysł, daj znać na
        Messengerze albo mailem - info@po8klasie.pl.
      </p>
      <h3>Spraw, by było o nas głośno!</h3>
      <p>
        Czy chcesz udostępnić naszą stronę na FB, czy pisać z hashtagiem #po8klasie - it&apos;s up
        to you. Po prostu spraw, by social media nas poznały.
      </p>
      <h3>Wyłapuj błędy!</h3>
      <p>
        Jeśli przeglądając nasz serwis trafisz na błąd, zgłoś to - napisz do nas na Messengerze albo
        na info@po8klasie.pl
      </p>
    </ArticleLayout>
  );
};

export default GetInvolvedPage;
