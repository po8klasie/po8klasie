import React, { FC } from 'react';
import { NextSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import { AiOutlineWarning } from '@react-icons/all-files/ai/AiOutlineWarning';
import AppLayout from '../components/app/AppLayout';
import Calculator from '../components/calculator/Calculator';
import withProjectConfig from '../config/withProjectConfig';

const CalculatorPage: FC = () => {
  return (
    <AppLayout>
      <NextSeo
        title="Kalkulator punktów"
        description="Oblicz swoje punkty rekrutacyjne z kalkulatorem punktów wyszukiwarki szkół średnich po8klasie"
      />
      <div className="w-container mx-auto">
        <h1 className="flex items-center text-3xl font-bold mt-5 lg:mt-10">
          Kalkulator punktów
          <span className="flex rounded-full bg-primaryBg text-primary uppercase px-2 py-1 text-xs font-bold ml-3">
            New
          </span>
        </h1>
        <p className="my-10">
          Podaj swoje oceny, wyniki z egzaminu ósmoklasisty oraz dodatkowe osiągnięcia (jeśli takie
          masz) i oblicz punkty, jakie uzyskasz podczas rekrutacji do szkoły średniej.
        </p>
        <div
          className="bg-primaryBg border-l-4 border-primary text-primary p-4 lg:w-1/2 xl:w-1/3 rounded "
          role="alert"
        >
          <p className="font-bold mb-2 flex items-center font-primary">
            <AiOutlineWarning className="mr-2 text-xl" />
            Przypomnienie
          </p>
          <p>Progi punktowe zmieniają się co roku i zależą od wielu czynników.</p>
        </div>
        <Calculator />
      </div>
    </AppLayout>
  );
};

export default withProjectConfig(CalculatorPage);

// https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
// A page that relies on publicRuntimeConfig must use getInitialProps/getServerSideProps to opt-out of Automatic Static Optimization.
// Runtime configuration won't be available to any page (or component in a page) without getInitialProps/getServerSideProps.
export const getServerSideProps = () => ({ props: {} });
