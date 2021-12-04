import { FC } from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Brand from './Brand';

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
        <Brand className="font-bold text-xl" />

        <div className="grid grid-cols-4 gap-4 text-2xl">
          {socialLinks.map(([link, Icon]) => (
            <a
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
