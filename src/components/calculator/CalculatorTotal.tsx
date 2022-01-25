import { FC, MouseEventHandler } from 'react';

interface CalculatorTotalProps {
  total: number;
  onReset: MouseEventHandler;
}

const CalculatorTotal: FC<CalculatorTotalProps> = ({ total, onReset }) => (
  <div className="border border-lighten bg-white rounded lg:sticky lg:top-36 font-primary">
    <div className="p-5 flex justify-between items-center">
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
    <div className="px-5 py-2 border-t border-lighten flex justify-end">
      <button type="button" className="text-primary font-bold text-sm" onClick={onReset}>
        Resetuj
      </button>
    </div>
  </div>
);

export default CalculatorTotal;
