import { FC } from 'react';
import Brand from '../Brand';

const CivicTechSection: FC = () => (
  <div className="mt-32 py-32 bg-primaryLight">
    <div className="w-narrowContainer mx-auto">
      <h2 className="text-center text-3xl font-bold">Technologia obywatelska</h2>
      <p className="mt-10 text-center text-lg">
        Projekt <Brand /> tworzymy zgodnie z zasadami <strong>civic tech</strong> (technologii
        obywatelskich). To forma aktywizmu społecznego, która włącza technologie cyfrowe do
        wzmocnienia i poprawy współpracy między obywatelami a administracją publiczną. Inicjatywy
        civic tech mają swoje źródło w konkretnych problemach sfery publicznej dotyczących zwykłych
        ludzi.
      </p>
    </div>
  </div>
);

export default CivicTechSection;
