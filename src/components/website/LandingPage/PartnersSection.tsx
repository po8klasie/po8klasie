import { FC } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { cityPartners, Partner, partners } from '../data/partners';
import { useTranslation } from 'next-i18next';

interface PartnersListProps {
  partnersList: Partner[];
  imgClassName: string;
}

const PartnersList: FC<PartnersListProps> = ({ partnersList, imgClassName }) => (
  <>
    {partnersList.map(({ name, image, imagePlaceholder, href }) => (
      <a
        key={href}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        title={name}
        className="block ml-4 first:ml-0"
      >
        <ProgressiveImage src={image} placeholder={imagePlaceholder}>
          {(src: string) => <img src={src} alt={name} className={imgClassName} />}
        </ProgressiveImage>
      </a>
    ))}
  </>
);

const PartnersSection: FC = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'partnersSection' });
  return (
    <div className="mt-32">
      <div className="w-container mx-auto">
        <h4 className="uppercase font-lighter text-center text-lg">{t('mainHeader')}</h4>
        <div className="mt-10 flex justify-center">
          <PartnersList partnersList={cityPartners} imgClassName="h-36 object-contain rounded" />
        </div>
        <div className="mt-10 flex justify-center">
          <PartnersList partnersList={partners} imgClassName="h-24 object-contain rounded" />
        </div>
      </div>
    </div>
  )
};

export default PartnersSection;
