import { FC, MouseEvent as ReactMouseEvent, useEffect, useState } from 'react';
import Brand from './Brand';
import { roundedLinkClassName } from './RoundedExternalLink';

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

const Navbar: FC = () => {
  const [shouldNavbarHaveBackground, setShouldNavbarHaveBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShouldNavbarHaveBackground(window.scrollY > 10);
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-10 z-10 transition duration-100 ${
        shouldNavbarHaveBackground && bgStyles
      }`}
    >
      <div className="w-container mx-auto flex justify-between items-center">
        <a {...getScrollToSectionProps('top')}>
          <Brand className="font-bold text-2xl" />
        </a>
        <a
          {...getScrollToSectionProps('support-us')}
          className={['font-bold', roundedLinkClassName].join(' ')}
        >
          Wesprzyj nas
        </a>
      </div>
    </div>
  );
};

export default Navbar;
