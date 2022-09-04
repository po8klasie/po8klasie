import { FC } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort } from '@react-icons/all-files/bs/BsArrowLeftShort';
import { ISchoolData } from '../../../types';
import { useProjectConfig } from '../../../config/projectConfigContext';
import { getSchoolTypeFromRspoInstitutionTypeId } from '../../../utils/apiDataMapping';

interface SchoolHeroProps {
  school: ISchoolData;
}

const SchoolHero: FC<SchoolHeroProps> = ({ school }) => {
  const { projectID } = useProjectConfig();

  const descriptors = [
    school.isPublic ? 'Szkoła publiczna' : 'Szkoła niepubliczna',
    getSchoolTypeFromRspoInstitutionTypeId(school.rspoFacilityType),
    school.city,
  ];

  return (
    <div className="bg-white border-b border-lighten">
      <div className="w-container mx-auto flex justify-between flex-col-reverse md:flex-row">
        <div className="py-6">
          <Link href={`/${projectID}/search`}>
            <a className="flex items-center">
              <BsArrowLeftShort className="mr-1 text-3xl" />
              Powrót do listy
            </a>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">{school.name}</h1>
          <ul className="lg:flex lg:mt-0 mt-2">
            {descriptors.map((d) => (
              <li key={d} className="lg:mx-2 first:ml-0 text-gray">
                {d}
              </li>
            ))}
          </ul>
        </div>
        {/* We don't support images for now */}
        {/* {<div className="relative"> */}
        {/*   <div */}
        {/*     style={{ background: `url(${tmpImg})` }} */}
        {/*     className="absolute top-0 left-0 w-full h-full blur filter blur opacity-50 md:hidden" */}
        {/*   /> */}
        {/*   <img */}
        {/*     src={tmpImg} */}
        {/*     alt="lorem" */}
        {/*     className="object-contain md:object-cover h-full max-h-40 md:w-auto w-full relative z-2" */}
        {/*   /> */}
        {/* </div>} */}
      </div>
    </div>
  );
};
export default SchoolHero;
