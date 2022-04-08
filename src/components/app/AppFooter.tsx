import { FC } from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons';
import getConfig from 'next/config';
import Brand from '../website/Brand';

const { publicRuntimeConfig } = getConfig();

const { APP_ENVIRONMENT, APP_FRONTEND_RELEASE } = publicRuntimeConfig;

const socialLinks: [string, IconType][] = [
  ['https://fb.com/po8klasie', FaFacebookF],
  ['https://twitter.com/po8klasie', FaTwitter],
  ['https://github.com/po8klasie', FaGithub],
  ['https://linkedin.com/company/po8klasie', FaLinkedinIn],
];

const footerLinks: [string, string][] = [['https://status.po8klasie.pl', 'Status strony']];

const AppFooter: FC = () => (
  <div className="bg-white text-black mt-32 pt-10 pb-10 md:pb-32 font-primary">
    <div className="w-container mx-auto">
      <div className="flex justify-between">
        <div className="lg:flex items-center">
          <Brand className="font-bold text-xl" />
          <span className="text-black lg:ml-10 flex items-center mt-5 lg:mt-0 text-sm lg:text-base">
            wersja {APP_FRONTEND_RELEASE}
            <span className="text-sm text-gray ml-2">{APP_ENVIRONMENT}</span>
          </span>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center items-end">
          <ul className="flex lg:mr-8 mt-5 lg:mt-0">
            {footerLinks.map(([href, text]) => (
              <li key={href} className="mx-4 last:mr-0 text-sm lg:text-base">
                <a href={href} target="_blank" rel="noreferrer noopener">
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-4 gap-4 text-2xl">
            {socialLinks.map(([link, Icon]) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-primary transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AppFooter;
