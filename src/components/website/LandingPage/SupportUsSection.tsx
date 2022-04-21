import { FC } from 'react';
import Brand from '../Brand';
import { useTranslation } from 'next-i18next';

const SupportCard: FC<{ title: string; linkElement: JSX.Element }> = ({
  title,
  linkElement,
  children,
}) => (
  <div className="p-10 border border-light rounded-xl shadow-md flex flex-col justify-between">
    <div>
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <p className="mt-10 text-lg text-center">{children}</p>
    </div>
    <div className="mt-10 flex justify-center">{linkElement}</div>
  </div>
);

const donationsUrl = 'https://ko-fi.com/po8klasie';
const githubProfileUrl = 'https://github.com/po8klasie';

// support-us id is used in navbar. -top-52 to leverage navbar height
const SupportUsSection: FC = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'supportUsSection' });
  return (
    <div className="my-32 relative">
      <span id="support-us" className="absolute -top-52" />
      <div className="w-container mx-auto">
        <h2 className="text-center text-3xl font-bold">{t('mainHeader')}</h2>
        <div className="mt-20 grid lg:grid-cols-3 gap-10">
          <SupportCard
            title={t('secondaryHeader1')}
            linkElement={
              <a href="mailto:info@po8klasie.pl" className="underline font-bold text-lg">
                {t('textFooter1')}
              </a>
            }
          >
            {t('textContent1')}
          </SupportCard>
          <SupportCard
            title={t('secondaryHeader2')}
            linkElement={
              <a
                href={donationsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline font-bold text-lg"
              >
                {t('textFooter2')}
              </a>
            }
          >
            {t('textContent2')}  <Brand />.
          </SupportCard>
          <SupportCard
            title={t('secondaryHeader3')}
            linkElement={
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline font-bold text-lg"
              >
                {t('textFooter3')}
              </a>
            }
          >
            {t('textContent3')}
          </SupportCard>
        </div>
      </div>
    </div>
  )
};

export default SupportUsSection;
