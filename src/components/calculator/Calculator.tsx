import { FC, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import _ from 'lodash';
import {
  CalculatedPoints,
  configs,
  ExamResultPoints,
  GradesPoints,
  initialData,
  PointsCalculator,
} from '@warsawlo/points-calculator';
import formConfig from './calculatorFormConfig';
import CalculatorMatrixSection from './CalculatorMatrixSection';
import CalculatorActivitiesSection from './CalculatorActivitiesSection';
import CalculatorTotal from './CalculatorTotal';

const { initialInputData, initialCalculatedPoints } = initialData;
const { config2018_2019: CONFIG_2018_2019 } = configs;
const calc = new PointsCalculator(CONFIG_2018_2019);

// based on https://stackoverflow.com/a/48584441
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const normalizeInputObject = (obj: Record<string, any>): Record<string, any> => {
  return _(obj)
    .pickBy(_.isObject)
    .mapValues(normalizeInputObject)
    .assign(_.omitBy(obj, _.isObject))
    .omitBy((value) => value === 0 || Number.isNaN(value) || value === "")
    .value();
};

const Calculator: FC = () => {
  const [points, setPoints] = useState<CalculatedPoints>(initialCalculatedPoints);
  const formMethods = useForm({
    defaultValues: initialInputData,
  });

  useEffect(() => {
    const subscription = formMethods.watch((values) => {
      calc.setData(normalizeInputObject(values));
      setPoints(calc.points);
    });
    return () => subscription.unsubscribe();
  }, [formMethods.watch]);

  return (
    <div className="lg:flex mt-4">
      <div className="border border-lighten bg-white rounded lg:w-1/2 xl:w-1/3">
        <FormProvider {...formMethods}>
          {formConfig.matrices.map((sectionData) => (
            <CalculatorMatrixSection
              key={sectionData.sectionId}
              sectionPoints={points[sectionData.sectionId] as ExamResultPoints | GradesPoints}
              matrixSectionData={sectionData}
            />
          ))}
          <CalculatorActivitiesSection
            checkboxesData={formConfig.checkboxes}
            sectionPoints={points}
          />
        </FormProvider>
      </div>
      <div className="mt-5 lg:ml-5">
        <CalculatorTotal total={points.total} />
      </div>
    </div>
  );
};

export default Calculator;
