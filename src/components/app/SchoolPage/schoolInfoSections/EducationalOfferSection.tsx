import { FC } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IconType } from 'react-icons';
import SchoolInfoSection from './SchoolInfoSection';

interface ItemWithIconProps {
  icon: IconType;
}

const ItemWithIcon: FC<ItemWithIconProps> = ({ children, icon: Icon }) => (
  <span className="inline-flex items-center justify-center">
    <Icon className="text-primary text-lg" />
    <span className="ml-2">{children}</span>
  </span>
);

const tmpExtracurriculars = [
  'Koło plastyczne',
  'Teatr szkolny',
  'Koło matematyczne',
  'Klub szachowy',
  'Klub wolontariusza',
  'Szkolny Klub Sportowy',
  'Klub modelarski',
  'Koło informatyczne',
  'Zespół taneczny',
];

const EducationalOfferSection: FC = () => {
  return (
    <SchoolInfoSection
      overwriteFooter="Dane poglądowe"
      id="educationalOffer"
      updateTime={new Date().toDateString()}
    >
      <div className="p-3">
        <h3 className="text-lg font-bold text-dark">Oferta edukacyjna</h3>
        <h4 className="text-dark text-base font-semibold mt-2">Zajęcia dodatkowe</h4>
        <ul className="mt-2 grid md:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-2 text-gray">
          {tmpExtracurriculars.map((name) => (
            <li key={name}>
              <ItemWithIcon icon={BsCheckCircleFill}>{name}</ItemWithIcon>
            </li>
          ))}
        </ul>
      </div>
    </SchoolInfoSection>
  );
};

export default EducationalOfferSection;
