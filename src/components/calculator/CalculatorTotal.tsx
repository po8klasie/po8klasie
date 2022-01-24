import { FC } from 'react';

interface CalculatorTotalProps {
  total: number;
}

const CalculatorTotal: FC<CalculatorTotalProps> = ({ total }) => (
  <div className="border border-lighten bg-white rounded lg:sticky lg:top-36 font-primary">
    <div className="m-5 flex justify-between items-center">
      <span className="text-xl font-bold mr-5">Suma</span>
      <span>
        <span
          className="font-bold text-xl text-center p-2 bg-primaryBg rounded w-20 block"
          data-testid="total"
        >
          {total.toFixed(2)}
        </span>
      </span>
    </div>
  </div>
);

export default CalculatorTotal;
