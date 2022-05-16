import { FC } from "react";
import SchoolInfoSection from "./SchoolInfoSection";
import DataAvailableSoonOverlay from "./DataAvailableSoonOverlay";

interface ClassSymbolProps {
  classSymbol: string
}

const ClassSymbol: FC<ClassSymbolProps> = ({ classSymbol }) => (
  <span className="inline-flex items-center justify-center rounded-full bg-lightBlue w-7 h-7 font-bold m-1">
    {classSymbol.toUpperCase()}
  </span>
);

type TmpClassProfile = [string, string, string[], string[], number]

const tmpClassProfiles: TmpClassProfile[] = [
  [
    'A',
    'dziennikarsko - prawnicza',
    ['język polski', 'historia', 'WOS'],
    ['język polski', 'historia', 'WOS', 'matematyka'],
    120
  ],
  [
    'B',
    'matematyczno - informatyczna',
    ['matematyka', 'fizyka', 'informatyka'],
    ['język polski', 'matematyka', 'fizyka', 'informatyka'],
    140
  ],
  [
    'C',
    'biologiczno - chemiczna',
    ['biologia', 'chemia', 'fizyka'],
    ['język polski', 'biologia', 'chemia', 'fizyka'],
    130
  ]
];

const ClassProfilesSection: FC = () => {
  return (
    <SchoolInfoSection
      overwriteFooter="Dane dostępne wkrótce"
      id="classProfiles"
      updateTime={new Date().toDateString()}
    >
      <div className="p-3 pb-0">
        <h3 className="text-lg font-bold text-dark">Profile klas</h3>
      </div>
      <DataAvailableSoonOverlay>
        <table className="my-2 w-full">
          <thead className="text-gray text-left">
          <tr>
            <th className="px-3">Klasa</th>
            <th className="px-3">Przedmioty rozszerzone</th>
            <th className="px-3">Przedmioty punktowane</th>
            <th className="px-3 text-right">Punkty 2021/2022</th>
          </tr>
          </thead>
          {tmpClassProfiles.map(([classSymbol, classLabel, extendedSubjects, countedSubjects, threshold]) => (
            <tr key={classSymbol} className="even:bg-lightBlue">
              <td className="px-3 py-2 flex items-center">
                <ClassSymbol classSymbol={classSymbol} />
                <span className="ml-2">{classLabel}</span>
              </td>
              <td className="px-3 py-2">
                {extendedSubjects.join(', ')}
              </td>
              <td className="px-3 py-2">
                {countedSubjects.join(', ')}
              </td>
              <td className="px-3 py-2 text-right">
                {threshold}
              </td>
            </tr>
          ))}
        </table>
      </DataAvailableSoonOverlay>
    </SchoolInfoSection>
  );
};

export default ClassProfilesSection;
