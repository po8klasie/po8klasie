import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import ourStoryImg from '../../../../public/assets/website/img/our-story.png';
import ourStoryImgPlaceholder from '../../../../public/assets/website/img/our-story.png?lqip';

const OurStorySection: FC = () => (
  <div className="mt-32 pt-32 pb-20 bg-primaryLight">
    <div className="w-narrowContainer mx-auto">
      <h2 className="text-center text-3xl font-bold">Historia</h2>
      <p className="mt-10 text-center text-lg">
        Michał, który zainicjował projkt sam stanął przed problem rozproszonych informacji o
        szkołach średnich podczas swojej rekturacji. Postanowił rozwiązać ten problem. Jendocześnie
        ucząc się programowania, tworzył z wszystkich wyszukanych informacji bazę danych
        warszawskich liceów. Tym projektem wciągnął innych fascynatów. Wiedziliśmy, że nie możemy
        ograniczać się do liceów.
      </p>
      <ProgressiveImage src={ourStoryImg} placeholder={ourStoryImgPlaceholder}>
        {(src: string) => (
          <img src={src} alt="" className="mt-10 h-96 mx-auto object-contain rounded" />
        )}
      </ProgressiveImage>
    </div>
  </div>
);

export default OurStorySection;
