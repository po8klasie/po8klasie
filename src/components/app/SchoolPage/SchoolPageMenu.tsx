import { FC, MouseEvent } from 'react';
import { SchoolInfoSectionConfig } from './schoolInfoSections/schoolInfoSections';

interface SchoolPageMenuProps {
  sectionConfigs: SchoolInfoSectionConfig[];
}
const SchoolPageMenu: FC<SchoolPageMenuProps> = ({ sectionConfigs }) => {
  const handleLinkClick = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y - 100,
        behavior: 'smooth',
      });
    }
  };
  return (
    <ul className="top-navbarHeight sticky pt-5 block">
      {sectionConfigs.map(({ id, name }) => (
        <li
          key={id}
          className="font-semibold first:mt-0 md:my-5 text-gray"
          data-to-scrollspy-id={id}
        >
          <a href={`#${id}`} onClick={handleLinkClick(id)}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SchoolPageMenu;
