import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import ourStoryImg from '../../../assets/website/img/our-story.png';
import ourStoryImgPlaceholder from '../../../assets/website/img/our-story.png?lqip';
import { useTranslation } from 'next-i18next';

const OurStorySection: FC = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'ourStrorySection' });
  return (
    <div className="mt-32 pt-32 pb-20 bg-primaryLight">
      <div className="w-narrowContainer mx-auto">
        <h2 className="text-center text-3xl font-bold">{t('mainHeader')}</h2>
        <p className="mt-10 text-center text-lg">
          {t('textContent1')}
        </p>
        <ProgressiveImage src={ourStoryImg} placeholder={ourStoryImgPlaceholder}>
          {(src: string) => (
            <img src={src} alt="" className="mt-10 h-96 mx-auto object-contain rounded" />
          )}
        </ProgressiveImage>
      </div>
    </div>
  )
};

export default OurStorySection;
