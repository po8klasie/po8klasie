import { FC } from 'react';
import { FaFacebookF, FaFacebookMessenger } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import RoundedExternalLink from '../RoundedExternalLink';
import { useTranslation } from 'next-i18next';

const ContactUsSection: FC = () => {
  const { t } = useTranslation('landing', { keyPrefix: 'contactUsSection' });
  return (
    <div className="my-32" id="contact-us">
      <div className="w-container mx-auto">
        <h2 className="text-center text-3xl font-bold">{t('mainHeader1')}</h2>
        <div className="mt-10 flex justify-center flex-wrap">
          <div className="mt-10 md:mt-0">
            <RoundedExternalLink href="mailto:info@po8klasie.pl" icon={BsEnvelope}>
              info@po8klasie.pl
            </RoundedExternalLink>
          </div>
          <div className="mt-10 md:mt-0 mx-10">
            <RoundedExternalLink href="https://m.me/po8klasie" icon={FaFacebookMessenger}>
              Messenger
            </RoundedExternalLink>
          </div>
        </div>
        <h2 className="mt-32 text-center text-3xl font-bold">{t('mainHeader2')}</h2>
        <div className="mt-10 flex justify-center">
          <RoundedExternalLink href="https://fb.com/po8klasie" icon={FaFacebookF}>
            fb.com/po8klasie
          </RoundedExternalLink>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
