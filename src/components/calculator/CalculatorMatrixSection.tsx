import { FC } from 'react';
import { ExamResultPoints, GradesPoints } from '@warsawlo/points-calculator';
import CalculatorMatrixRow from './CalculatorMatrixRow';
import { CalculatorInputProps } from './CalculatorInputs';

export interface MatrixRowData {
  id: string;
  name: string;
  inputComponent: FC<CalculatorInputProps>;
}

export interface MatrixSectionData {
  sectionId: string;
  sectionName: string;
  columns: [string, string, string];
  rows: MatrixRowData[];
}

interface CalculatorMatrixSectionProps {
  matrixSectionData: MatrixSectionData;
  sectionPoints: ExamResultPoints | GradesPoints;
}

const CalculatorMatrixSection: FC<CalculatorMatrixSectionProps> = ({
  matrixSectionData: { sectionId, sectionName, columns, rows },
  sectionPoints,
}) => {
  return (
    <div className="p-5 border-b border-lighten">
      <h3 className="text-2xl font-bold mb-3">{sectionName}</h3>
      <div className="grid grid-cols-5 gap-x-4 mb-3" data-testid="header">
        <span className="col-span-3">{columns[0]}</span>
        <span className="text-center">{columns[1]}</span>
        <span className="text-center">{columns[2]}</span>
      </div>
      <div className="grid gap-y-1" data-testid="rows">
        {rows.map(({ name, id, inputComponent }) => (
          <CalculatorMatrixRow
            key={id}
            name={name}
            inputId={`${sectionId}.${id}`}
            inputComponent={inputComponent}
            calculatedPoints={sectionPoints[id] as number}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculatorMatrixSection;
