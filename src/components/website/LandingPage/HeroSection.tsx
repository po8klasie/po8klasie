import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import Brand from '../Brand';

import heroGradientsImg from '../../../assets/website/img/hero-gradients.png';
import heroGradientsImgPlaceholder from '../../../assets/website/img/hero-gradients.png?lqip';

const HeroSection: FC = () => (
  <div className="pt-64 pb-32 relative">
    <ProgressiveImage src={heroGradientsImg} placeholder={heroGradientsImgPlaceholder}>
        {(src: string) => (
          <img src={src} alt="" className="absolute top-0 left-0 md:w-full md:h-full -z-1" />
        )}
      </ProgressiveImage>
    <div className="sm:w-narrowContainer w-container mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-relaxed">
        <Brand /> pomaga Ci wybrać szkołę średnią
      </h1>
      <h2 className="text-3xl mt-16">
        Wierzymy, że wybór szkoły średniej nie powinien ograniczać się do kryterium punktowego.
      </h2>
      <h3 className="text-xl mt-16">
        Łączymy dane z różnych źródeł, aby wesprzeć młodzież i rodziców w wyborze szkoły średniej.
      </h3>
    </div>
  </div>
);

export default HeroSection;
