import { FC } from 'react';

interface SchoolUpdateInfoProps {
  updateTime: string;
}

const SchoolUpdateInfo: FC<SchoolUpdateInfoProps> = ({ updateTime }) => (
  <span>Aktualizacja: {new Date(updateTime).toLocaleDateString('pl')}</span>
);

interface SchoolInfoSectionProps {
  id: string;
  updateTime: string;
  overwriteFooter?: string;
}

const SchoolInfoSection: FC<SchoolInfoSectionProps> = ({
  id,
  children,
  updateTime,
  overwriteFooter,
}) => (
  <div className="mt-5 first:mt-0 border border-light rounded-lg" id={id}>
    {children}
    <div className="border-light border-t py-2 px-5 text-right text-gray text-sm">
      {overwriteFooter || <SchoolUpdateInfo updateTime={updateTime} />}
    </div>
  </div>
);

export default SchoolInfoSection;
