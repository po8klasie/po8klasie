import { FC } from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { IconType } from 'react-icons';
import { publicRuntimeConfig } from '../../runtimeConfig';
import Brand from './Brand';

const { APP_ENVIRONMENT, APP_FRONTEND_RELEASE } = publicRuntimeConfig;

const socialLinks: [string, IconType][] = [
  ['https://fb.com/po8klasie', FaFacebookF],
  ['https://twitter.com/po8klasie', FaTwitter],
  ['https://github.com/po8klasie', FaGithub],
  ['https://linkedin.com/company/po8klasie', FaLinkedinIn],
];

const Footer: FC = () => (
  <div className="bg-dark text-white mt-32 pt-10 pb-10 md:pb-32">
    <div className="w-container mx-auto">
      <div className="flex justify-between">
        <div className="lg:flex items-center">
          <Brand className="font-bold text-xl" />
          <span className="text-black lg:ml-10 flex items-center mt-5 lg:mt-0 text-sm lg:text-base">
            wersja {APP_FRONTEND_RELEASE}
            <span className="text-sm text-light ml-2">{APP_ENVIRONMENT}</span>
          </span>
        </div>
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
);

export default Footer;
