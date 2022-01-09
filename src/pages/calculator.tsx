import React, { FC } from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import { AiOutlineWarning } from 'react-icons/ai';
import AppLayout from '../components/app/AppLayout';
import Calculator from '../components/calculator/Calculator';

const CalculatorPage: FC = () => {
  return (
    <AppLayout>
      <Head>
        <title>Kalkulator punktów - po8klasie</title>
        <meta
          name="description"
          content="Oblicz swoje punkty rekrutacyjne z kalkulatorem punktów wyszukiwarki szkół średnich po8klasie"
        />
      </Head>
      <div className="w-container mx-auto">
        <h1 className="flex items-center text-3xl font-bold">
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
          <p className="font-bold mb-2 flex items-center">
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

export default CalculatorPage;
