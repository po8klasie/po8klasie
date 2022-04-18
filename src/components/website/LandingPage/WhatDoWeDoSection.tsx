import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';

import searchMockUpImg from '../../../assets/website/img/search-mockup.png';
import searchMockUpImgPlaceholder from '../../../assets/website/img/search-mockup.png?lqip';
import comparisonMockUpImg from '../../../assets/website/img/comparison-mockup.png';
import comparisonMockUpImgPlaceholder from '../../../assets/website/img/comparison-mockup.png?lqip';
import schoolViewMockUpImg from '../../../assets/website/img/school-view-mockup.png';
import schoolViewMockUpImgPlaceholder from '../../../assets/website/img/school-view-mockup.png?lqip';
import { useTranslation } from 'next-i18next';

const MockUpImage: FC<{ src: string; placeholder: string; alt: string }> = ({
  src: imgSrc,
  placeholder,
  alt,
}) => (
  <ProgressiveImage src={imgSrc} placeholder={placeholder}>
    {(src: string) => <img src={src} alt={alt} className="h-96 mx-auto object-contain rounded" />}
  </ProgressiveImage>
);

const WhatDoWeDoSection: FC = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'whatDoWeDoSection' });
  return (
    <div className="mt-32">
      <h2 className="text-center text-3xl font-bold">{t('howDoWeHelp')}</h2>
      <div className="w-4/5 mx-auto mt-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 lg:grid-cols-2">
          <div className="flex items-center">
            <p className="text-lg">{t('tile1Text')}</p>
          </div>
          <div className="w-full">
            <MockUpImage
              alt={t('tile1AltText')}
              src={searchMockUpImg}
              placeholder={searchMockUpImgPlaceholder}
            />
          </div>

          <div className="w-full">
            <MockUpImage
              alt={t('tile2AltText')}
              src={comparisonMockUpImg}
              placeholder={comparisonMockUpImgPlaceholder}
            />
          </div>
          <div className="flex items-center">
            <p className="text-lg">{t('tile2Text')}</p>
          </div>

          <div className="flex items-center">
            <p className="text-lg">{t('tile3Text')}</p>
          </div>
          <div className="w-full">
            <MockUpImage
              alt={t('tile3AltText')}
              src={schoolViewMockUpImg}
              placeholder={schoolViewMockUpImgPlaceholder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeDoSection;
