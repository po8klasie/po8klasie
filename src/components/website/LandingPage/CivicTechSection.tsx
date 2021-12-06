import { FC } from 'react';
import Brand from '../Brand';

const CivicTechSection: FC = () => (
  <div className="mt-32 py-32 bg-primaryLight">
    <div className="w-narrowContainer mx-auto">
      <h2 className="text-center text-3xl font-bold">Technologia obywatelska</h2>
      <p className="mt-10 text-center text-lg">
        <Brand/> tworzymy jako projekt <strong>civic-tech</strong>. Ruch civic tech (technologii obywatelskich) to forma aktywizmu społecznego,
        która skupia się na zastosowaniu technologii do poprawienia współpracy między obywatelami a samorządami.
        Inicjatywy civic-tech często, tak jak w naszym przypadku, mają swoje źródło w konkretnych problemach,
        które motywują obywateli do próby rozwiązania ich we współpracy z urzędem.
      </p>
    </div>
  </div>
);

export default CivicTechSection;
