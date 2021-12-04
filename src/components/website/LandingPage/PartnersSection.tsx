import { FC } from 'react';
import Image from 'next/image';

const partnersList = [
  {
    src: '/assets/website/img/partners/SurveyLab-logo.png',
    href: 'https://surveylab.com',
  },
];

const PartnersSection: FC = () => (
  <div className="mt-32">
    <div className="w-container mx-auto">
      <h4 className="uppercase font-lighter text-center text-lg">Współpracują z nami</h4>
      <div className="flex justify-center">
        {partnersList.map(({ src, href }) => (
          <a href={href} target="_blank" rel="noreferrer noopener">
            <Image src={src} width={200} height={100} objectFit="contain" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default PartnersSection;
