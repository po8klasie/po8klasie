import { FC } from 'react';
import Brand from '../Brand';

const CivicTechSection: FC = () => (
  <div className="mt-32 py-32 bg-primaryLight">
    <div className="w-narrowContainer mx-auto">
      <h2 className="text-center text-3xl font-bold">Technologia obywatelska</h2>
      <p className="mt-10 text-center text-lg">
        <Brand /> tworzymy jako projekt <strong>civic-tech</strong>. W języku polskim, tłumaczymy to
        jako “technologie obywatelskie”. Oznacza to, iż najważniejsze dla nas rozwiązanie problemu
        czyli ułatwienie młodzieży wybóru szkoły.
      </p>
    </div>
  </div>
);

export default CivicTechSection;
