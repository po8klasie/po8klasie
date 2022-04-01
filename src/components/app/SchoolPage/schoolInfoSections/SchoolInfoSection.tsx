import { FC } from 'react';
import { useProjectConfig } from "../../../../config/projectConfigContext";

const SchoolUpdateInfo = () => {
  const { projectID } = useProjectConfig();

  if(projectID === 'warszawa' || projectID === 'krakow')
    return (
      <span>
        Źródło: Rejestr Szkół i Placówek Oświatowych | Aktualizacja: {new Date(2022, 2, 20).toLocaleDateString("pl")}
        </span>
        )

  if(projectID === 'gdynia')
    return (
      <span>
        Źródło: Urząd Miasta Gdynia | Aktualizacja: {new Date(2022, 2, 31).toLocaleDateString("pl")}
        </span>
    )

  return null;
}

interface SchoolInfoSectionProps {
  id: string;
  updateTime?: Date;
  overwriteFooter?: string
}

const SchoolInfoSection: FC<SchoolInfoSectionProps> = ({ id, children, overwriteFooter }) => (
  <div className="mt-5 first:mt-0 border border-light rounded-lg" id={id}>
    {children}
    <div className="border-light border-t py-2 px-5 text-right text-gray text-sm">
      {overwriteFooter ? overwriteFooter : <SchoolUpdateInfo />}
    </div>
  </div>
);

export default SchoolInfoSection;
