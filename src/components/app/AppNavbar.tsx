import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { roundedSmallLinkClassName } from '../website/RoundedExternalLink';
import Brand from '../website/Brand';

const links: [string, string][] = [
  ['Strona główna', '/'],
  ['Kalkulator punktów', '/calculator'],
];

const AppNavbar: FC = () => {
  const router = useRouter();
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const toggleMenu = () => setIsMenuCollapsed(!isMenuCollapsed);

  const getLinkClassName = (href: string) => {
    return router.pathname === href ? 'font-bold' : '';
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white border-b border-lighten font-primary">
      <div className="w-container mx-auto lg:flex justify-between items-center py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a>
              <Brand className="font-bold text-xl" />
            </a>
          </Link>
          <button className="text-xl lg:hidden" onClick={toggleMenu} type="button">
            {isMenuCollapsed ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div className={`lg:flex items-center ${!isMenuCollapsed && 'hidden'} lg:block`}>
          <ul className="lg:flex lg:mr-8">
            {links.map(([text, href]) => (
              <li key={href} className="lg:mx-4 my-4 lg:my-0">
                <Link href={href}>
                  <a className={getLinkClassName(href)}>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#support-us">
            <a
              className={[
                'font-bold cursor-pointer inline-block w-full sm:w-auto text-center',
                roundedSmallLinkClassName,
                '',
              ].join(' ')}
            >
              Wesprzyj projekt
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
