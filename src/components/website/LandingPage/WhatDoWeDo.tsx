import { FC } from 'react';
import Image from 'next/image';

const MockUpImage: FC<{ src: string }> = ({ src }) => (
  <Image src={src} width={800} height={300} objectFit="contain" />
);

const WhatDoWeDo: FC = () => (
  <div className="mt-32">
    <h2 className="text-center text-3xl font-bold">Co tworzymy?</h2>
    <div className="w-4/5 mx-auto mt-20">
      <div className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2">
        <div className="flex items-center">
          <p className="text-lg">
            Łączymy dane z różnych źródeł, aby wesprzeć młodzież i rodziców w wyborze szkoły
            średniej. Chcemy oferować jak najwięcej ważnych informacji, aby wybór szkoły nie był tak
            stresujący.
          </p>
        </div>
        <div className="w-full">
          <MockUpImage src="/assets/website/img/search-mockup.png" />
        </div>

        <div className="w-full">
          <MockUpImage src="/assets/website/img/comparison-mockup.png" />
        </div>
        <div className="flex items-center">
          <p className="text-lg">
            W wygodny sposób wyszukasz interesujące szkoły według wybranych przez Ciebie kryteriów.
            Na profilu każdej szkoły znajdziesz wszystkie najważniejsze informacje. Będzie mógł
            porównać szkoły ze sobą. Prosto i łatwo, bez ręcznego robienia zestawienia.
          </p>
        </div>

        <div className="flex items-center">
          <p className="text-lg">
            Już nie ma potrzeby przeglądania wielu stron szkół, czy rankingów. Będziesz mógł nawet
            porównać szkoły wg czasu dotarcia, niebezpiecznych miejscach po drodze jak i poziomu
            zanieczyszczenia smogiem!
          </p>
        </div>
        <div className="w-full">
          <MockUpImage src="/assets/website/img/comparison-mockup.png" />
        </div>
      </div>
    </div>
  </div>
);

export default WhatDoWeDo;
