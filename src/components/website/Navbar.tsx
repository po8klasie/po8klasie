import { FC, MouseEvent as ReactMouseEvent, useEffect, useState } from 'react';
import Brand from './Brand';
import { roundedLinkClassName } from './RoundedExternalLink';
import { useTranslation } from "next-i18next";

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

const bgStyles = 'bg-opacity-70 backdrop-filter backdrop-blur-2xl bg-white border-b border-light';

interface NavbarProps {
  navbarWrapperClassName: string;
}

const Navbar: FC<NavbarProps> = ({ navbarWrapperClassName }) => {
  const [shouldNavbarHaveBackground, setShouldNavbarHaveBackground] = useState(false);
  const { t } = useTranslation('landing');
  useEffect(() => {
    const handleScroll = () => setShouldNavbarHaveBackground(window.scrollY > 10);
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition duration-100 ${
        shouldNavbarHaveBackground && bgStyles
      } ${navbarWrapperClassName ?? ''}`}
    >
      <div className="w-container mx-auto flex justify-between items-center">
        <a {...getScrollToSectionProps('top')}>
          <Brand className="font-bold text-2xl" />
        </a>
        <a
          {...getScrollToSectionProps('support-us')}
          className={['font-bold', roundedLinkClassName].join(' ')}
        >
          {t('navbar.supportTheProject')}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
