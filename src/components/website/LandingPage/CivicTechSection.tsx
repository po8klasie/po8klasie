import { FC } from 'react';
import Brand from '../Brand';
import { useTranslation } from 'next-i18next';

const CivicTechSection: FC = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'civicTechSection' });
  return (
    <div className="mt-32 py-32 bg-primaryLight">
    <div className="w-narrowContainer mx-auto">
      <h2 className="text-center text-3xl font-bold"> {t("civicTechnology")} </h2>
      <p className="mt-10 text-center text-lg">
        {t('project')} <Brand /> {t('textFragment1')} <strong> {t('textFragment2')}</strong> {t('textFragment3')}
      </p>
    </div>
  </div>
  );
};

export default CivicTechSection;

