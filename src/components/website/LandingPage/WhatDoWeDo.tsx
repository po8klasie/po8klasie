import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

import searchMockUpImg from '../../../assets/website/img/search-mockup.png';
import searchMockUpImgPlaceholder from '../../../assets/website/img/search-mockup.png?lqip';
import comparisonMockUpImg from '../../../assets/website/img/comparison-mockup.png';
import comparisonMockUpImgPlaceholder from '../../../assets/website/img/comparison-mockup.png?lqip';
import schoolViewMockUpImg from '../../../assets/website/img/school-view-mockup.png';
import schoolViewMockUpImgPlaceholder from '../../../assets/website/img/school-view-mockup.png?lqip';

const MockUpImage: FC<{ src: string; placeholder: string; alt: string }> = ({
  src: imgSrc,
  placeholder,
  alt,
}) => (
  <ProgressiveImage src={imgSrc} placeholder={placeholder}>
    {(src: string) => <img src={src} alt={alt} className="h-96 mx-auto object-contain rounded" />}
  </ProgressiveImage>
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
          <MockUpImage
            alt="Zrzut ekranu wyszukiwarki"
            src={searchMockUpImg}
            placeholder={searchMockUpImgPlaceholder}
          />
        </div>

        <div className="w-full">
          <MockUpImage
            alt="Zrzut ekranu porównywarki szkół"
            src={comparisonMockUpImg}
            placeholder={comparisonMockUpImgPlaceholder}
          />
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
          <MockUpImage
            alt="Zrzut ekranu widoku szkoły"
            src={schoolViewMockUpImg}
            placeholder={schoolViewMockUpImgPlaceholder}
          />
        </div>
      </div>
    </div>
  </div>
);

export default WhatDoWeDo;
