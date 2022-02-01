import gdyniaImg from '../../../assets/website/img/partners/Gdynia-logo.png';
import gdyniaImgPlaceholder from '../../../assets/website/img/partners/Gdynia-logo.png?lqip';
import mojePanstwoImg from '../../../assets/website/img/partners/MojePanstwo-logo.png';
import mojePanstwoImgPlaceholder from '../../../assets/website/img/partners/MojePanstwo-logo.png?lqip';
import surveyLabImg from '../../../assets/website/img/partners/SurveyLab-logo.png';
import surveyLabImgPlaceholder from '../../../assets/website/img/partners/SurveyLab-logo.png?lqip';

export interface Partner {
  name: string;
  image: string;
  imagePlaceholder: string;
  href: string;
}

export const cityPartners: Partner[] = [
  {
    name: 'Urząd Miasta Gdynia',
    image: gdyniaImg,
    imagePlaceholder: gdyniaImgPlaceholder,
    href: 'https://gdynia.pl',
  },
];

export const partners: Partner[] = [
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
