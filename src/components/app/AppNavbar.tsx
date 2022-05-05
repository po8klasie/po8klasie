import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { roundedSmallLinkClassName } from '../website/RoundedExternalLink';
import Brand from '../website/Brand';
import { useProjectConfig } from '../../config/projectConfigContext';
import { isFeatureFlagEnabled, publicRuntimeConfig } from "../../runtimeConfig";

interface AppNavbarProps {
  projectName?: string;
  wide?: boolean;
}

const AppNavbar: FC<AppNavbarProps> = ({ projectName, wide }) => {
  const router = useRouter();
  const { projectID } = useProjectConfig();
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const toggleMenu = () => setIsMenuCollapsed(!isMenuCollapsed);

  const links: [string, string][] = [
    ['Strona główna', '/'],
    ];

  if (isFeatureFlagEnabled(publicRuntimeConfig.SHOW_LINKS_TO_APP))
    links.push(['Szkoły', `/${projectID}/search`]);

  links.concat([
    ['Kalkulator punktów', '/calculator'],
  ])

  const getLinkClassName = (href: string) => {
    return router.pathname === href ? 'font-bold' : '';
  };

  return (
    <div className="fixed top-0 left-0 w-full z-99999 bg-white border-b border-lighten font-primary h-navbarHeight flex items-center">
      <div
        className={`${
          wide ? 'w-wideContainer' : 'w-container'
        } mx-auto lg:flex justify-between items-center py-3`}
      >
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center">
              <Brand projectName={projectName} className="font-bold text-xl" />
              <span className="ml-2 rounded-full bg-primaryBg text-primary uppercase px-2 py-1 text-xs font-bold">
                Beta
              </span>
            </a>
          </Link>
          <button className="text-xl lg:hidden" onClick={toggleMenu} type="button">
            {isMenuCollapsed ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div
          className={`lg:flex items-center absolute z-10 top-navbarHeight bg-white w-container lg:w-auto pb-3 lg:pb-0 lg:static ${
            !isMenuCollapsed && 'hidden'
          }`}
        >
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
