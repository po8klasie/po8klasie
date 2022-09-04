import { FC, MouseEvent as ReactMouseEvent, useEffect, useState } from 'react';
import Brand from './Brand';
import { roundedSmallLinkClassName } from './RoundedExternalLink';
import { useTranslation } from 'next-i18next';
import { Popover } from '@headlessui/react';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { FiX } from '@react-icons/all-files/fi/FiX';
import Link from 'next/link';
import { ProjectsList } from './LandingPage/HeroSection';
import capitalize from 'lodash/capitalize';
import { isFeatureFlagEnabled, publicRuntimeConfig } from '../../runtimeConfig';

const getScrollToSectionProps = (to: string) => ({
  href: to === 'top' ? '#' : `${to}`,
  onClick: (e: ReactMouseEvent) => {
    e.preventDefault();
    switch (to) {
      case 'top':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
      default:
        (document.getElementById(to) as Element).scrollIntoView({
          behavior: 'smooth',
        });
    }
  },
});

const backdropStyles = 'bg-opacity-70 backdrop-filter backdrop-blur-2xl';
const navbarBgStyle = `${backdropStyles} bg-white border-light border-b`;
const popoverPanelClassName = `${backdropStyles}  border-light md:border rounded md:absolute top-7 bg-transparent md:bg-white md:left-1/2 md:-translate-x-1/2 transform md:px-4`;

interface NavbarProps {
  navbarWrapperClassName: string;
  projectsList: ProjectsList;
}

const Navbar: FC<NavbarProps> = ({ navbarWrapperClassName, projectsList }) => {
  const [shouldNavbarHaveBackground, setShouldNavbarHaveBackground] = useState(false);
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);

  const { t } = useTranslation('landing');
  useEffect(() => {
    const handleScroll = () => setShouldNavbarHaveBackground(window.scrollY > 10);
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition duration-100 ${
        (shouldNavbarHaveBackground || !isNavbarCollapsed) && navbarBgStyle
      } ${navbarWrapperClassName ?? ''}`}
    >
      <div className="w-container mx-auto md:flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <a {...getScrollToSectionProps('top')}>
            <Brand className="font-bold text-2xl" />
          </a>
          <span className="md:hidden" onClick={() => setNavbarCollapsed(!isNavbarCollapsed)}>
            {isNavbarCollapsed ? <FiMenu /> : <FiX />}
          </span>
        </div>
        <div
          className={`w-full mt-5 md:flex items-center justify-end ${
            isNavbarCollapsed && 'hidden'
          }`}
        >
          <ul className="flex md:flex-row flex-col">
            {isFeatureFlagEnabled(publicRuntimeConfig.SHOW_LINKS_TO_APP) && (
              <li className="my-1">
                <Popover className="relative">
                  <Popover.Button className="font-bold md:mx-5">
                    {t('navbar.schools')}
                  </Popover.Button>
                  <Popover.Panel className={popoverPanelClassName}>
                    <ul>
                      {projectsList.map(({ projectID, appName }) => (
                        <li className="ml-2 md:ml-0 my-2">
                          <a href={`/${projectID}`}>{capitalize(appName)}</a>
                        </li>
                      ))}
                    </ul>
                  </Popover.Panel>
                </Popover>
              </li>
            )}
            <li className="font-bold md:mx-5 my-1">
              <Link href="/calculator">
                <a>{t('navbar.pointsCalculator')}</a>
              </Link>
            </li>
            <li className="font-bold md:mx-5 my-1">
              <a target="_blank" rel="noreferrer noopener" href="https://blog.po8klasie.pl">
                Blog
              </a>
            </li>
          </ul>
          <span className="block mt-5 md:mt-0 md:ml-5">
            <a
              {...getScrollToSectionProps('support-us')}
              className={[
                'font-bold inline-block w-full sm:w-auto text-center',
                roundedSmallLinkClassName,
              ].join(' ')}
            >
              {t('navbar.supportTheProject')}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
