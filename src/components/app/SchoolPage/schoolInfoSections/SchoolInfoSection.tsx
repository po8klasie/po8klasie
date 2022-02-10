import { FC } from 'react';

interface SchoolInfoSectionProps {
  id: string;
  source: string;
  updateTime?: Date;
}

const SchoolInfoSection: FC<SchoolInfoSectionProps> = ({ id, children, source }) => (
  <div className="mt-5 first:mt-0 border border-light rounded-lg" id={id}>
    {children}
    <div className="border-light border-t py-2 px-5 text-right text-gray text-sm">
      Źródło: {source} | Aktualizacja: {new Date(/* tmp */).toLocaleDateString('pl')}
    </div>
  </div>
);

export default SchoolInfoSection;
