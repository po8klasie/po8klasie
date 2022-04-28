import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { FaWpforms } from 'react-icons/fa';
import RoundedExternalLink from '../RoundedExternalLink';

import lookupImg from '../../../assets/website/img/features-lookup.png';
import lookupImgPlaceholder from '../../../assets/website/img/features-lookup.png?lqip';
import surveyImg from '../../../assets/website/img/features-survey.png';
import surveyImgPlaceholder from '../../../assets/website/img/features-survey.png?lqip';

import { useTranslation } from 'next-i18next';

const SURVEY_LINK = 'https://here4.pl/wybor-ankieta-12';

const Image: FC<{ src: string; placeholder: string; alt: string }> = ({
  src: imgSrc,
  placeholder,
  alt,
}) => (
  <ProgressiveImage src={imgSrc} placeholder={placeholder}>
    {(src: string) => <img src={src} alt={alt} className="h-96 mx-auto object-contain rounded" />}
  </ProgressiveImage>
);

const FeaturesSection: FC = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'featuresSection' });
  return (
    <div className="mt-32">
      <h2 className="text-center text-3xl font-bold"> {t('mainHeader')} </h2>
      <div className="w-4/5 mx-auto mt-20">
        <div className="grid gap-x-10 gap-y-20 lg:grid-cols-2">
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4"> {t('secondaryHeader1')} </h3>
              <p className="text-lg">{t('textContent1')}</p>
            </div>
          </div>
          <div className="w-full">
            <Image alt="" src={lookupImg} placeholder={lookupImgPlaceholder} />
          </div>

          <div className="flex items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4"> {t('secondaryHeader2')} </h3>
              <p className="text-lg">{t('textContent2')}</p>
              <RoundedExternalLink
                href={SURVEY_LINK}
                icon={FaWpforms}
                className="inline-flex mt-10"
              >
                {t('surveyInvitation')}
              </RoundedExternalLink>
            </div>
          </div>
          <div className="w-full">
            <Image alt="" src={surveyImg} placeholder={surveyImgPlaceholder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
