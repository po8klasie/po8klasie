import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import mojePanstwoImg from '../../../assets/website/img/partners/MojePanstwo-logo.png';
import mojePanstwoImgPlaceholder from '../../../assets/website/img/partners/MojePanstwo-logo.png?lqip';
import surveyLabImg from '../../../assets/website/img/partners/SurveyLab-logo.png';
import surveyLabImgPlaceholder from '../../../assets/website/img/partners/SurveyLab-logo.png?lqip';

const partnersList = [
  {
    name: 'Fundacja Moje Państwo',
    image: mojePanstwoImg,
    imagePlaceholder: mojePanstwoImgPlaceholder,
    href: 'https://mojepanstwo.pl',
  },
  {
    name: 'SurveyLab',
    image: surveyLabImg,
    imagePlaceholder: surveyLabImgPlaceholder,
    href: 'https://surveylab.com',
  },
];

const PartnersSection: FC = () => (
  <div className="mt-32">
    <div className="w-container mx-auto">
      <h4 className="uppercase font-lighter text-center text-lg">Partnerzy</h4>
      <div className="mt-10 flex justify-center">
        {partnersList.map(({ name, image, imagePlaceholder, href }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer noopener" title={name} className="block ml-4 first:ml-0">
            <ProgressiveImage src={image} placeholder={imagePlaceholder}>
              {(src: string) => <img src={src} alt={name} className="h-24 object-contain rounded" />}
            </ProgressiveImage>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default PartnersSection;
