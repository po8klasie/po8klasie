import { FC } from 'react';
import { CalculatorInputProps } from './CalculatorInputs';

interface CalculatorMatrixRowProps {
  name: string;
  inputId: string;
  inputComponent: FC<CalculatorInputProps>;
  calculatedPoints: number;
}

const inputClassName =
  'appearance-none border border-lighten focus:border-dark rounded w-10 h-10 text-center focus:ring-0';

const CalculatorMatrixRow: FC<CalculatorMatrixRowProps> = ({
  name,
  inputComponent: Input,
  inputId,
  calculatedPoints,
}) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 text-gray flex items-center">{name}</div>
      <div className="flex items-center justify-center">
        <Input className={inputClassName} inputId={inputId} />
      </div>
      <span className="flex items-center justify-center font-bold">
        {calculatedPoints.toFixed(2)}
      </span>
    </div>
  );
};

export default CalculatorMatrixRow;
