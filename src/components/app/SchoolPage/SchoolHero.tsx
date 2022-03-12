import { FC } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';

const tmpDescriptors = ['Szkoła publiczna', 'Liceum', 'Witomino'];

const tmpImg =
  'https://1alo.org/wp-content/uploads/2019/04/1180680-Palacyk-ma-sluzyc-jako-centrum-konferencyjne-Park-bedzie-jednak-otwarty-dla__c_0_299_2495_1350-270x250.jpg';

const SchoolHero: FC = () => (
  <div className="bg-white border-b border-lighten">
    <div className="w-container mx-auto flex justify-between flex-col-reverse md:flex-row">
      <div className="py-6">
        <Link href="/">
          <a className="flex items-center">
            <BsArrowLeftShort className="mr-1 text-3xl" />
            Powrót do listy
          </a>
        </Link>
        <h1 className="text-3xl font-bold mt-4">I LO im. Zasłużonych Ludzi Morza</h1>
        <ul className="flex">
          {tmpDescriptors.map((d) => (
            <li key={d} className="mx-2 first:ml-0 text-gray">
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div
          style={{ background: `url(${tmpImg})` }}
          className="absolute top-0 left-0 w-full h-full blur filter blur opacity-50 md:hidden"
        />
        <img
          src={tmpImg}
          alt="lorem"
          className="object-contain md:object-cover h-full max-h-40 md:w-auto w-full relative z-2"
        />
      </div>
    </div>
  </div>
);
export default SchoolHero;
