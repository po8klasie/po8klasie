import React, { FC, HTMLProps } from 'react';
import { useFormContext } from 'react-hook-form';
import { CalculatedPoints } from '@warsawlo/points-calculator';

interface CalculatorActivityCheckboxProps {
  name: string;
  inputProps: HTMLProps<HTMLInputElement>;
  calculatedPoints: number;
}

export const ActivityCheckbox: FC<CalculatorActivityCheckboxProps> = ({
  name,
  inputProps,
  calculatedPoints,
}) => {
  return (
    <div className="flex items-center my-4">
      <label className="inline-flex items-center cursor-pointer select-none">
        <input
          {...inputProps}
          type="checkbox"
          className="h-5 w-5 text-primary focus:ring-primary rounded"
          data-testid="input"
        />
        <span className="ml-2 text-gray" data-testid="label">
          {name}
        </span>
      </label>
      <span className="font-bold ml-5" data-testid="calculated-points">
        {calculatedPoints.toFixed(0)}
      </span>
    </div>
  );
};

type CheckboxId = 'merit' | 'activity' | 'accomplishments';

export interface CheckboxData {
  id: CheckboxId;
  name: string;
}

interface CalculatorActivitiesSectionProps {
  checkboxesData: CheckboxData[];
  sectionPoints: Pick<CalculatedPoints, CheckboxId>;
}

const CalculatorActivitiesSection: FC<CalculatorActivitiesSectionProps> = ({
  checkboxesData,
  sectionPoints,
}) => {
  const { register } = useFormContext();
  return (
    <div className="m-5">
      <h3 className="text-2xl font-bold mb-3">Osiągnięcia</h3>
      <div data-testid="checkboxes">
        {checkboxesData.map(({ id, name }) => (
          <ActivityCheckbox
            key={id}
            name={name}
            inputProps={register(id)}
            calculatedPoints={sectionPoints[id] as number}
          />
        ))}
      </div>
      <h4 className="text-xl font-bold mt-5">Konkursy</h4>
      <span className="inline-block rounded-full bg-light text-black uppercase px-2 py-1 text-xs mt-2 font-bold">
        Wkrótce
      </span>
    </div>
  );
};

export default CalculatorActivitiesSection;
