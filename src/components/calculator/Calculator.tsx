import { FC, useEffect, useMemo, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import _ from 'lodash';
import {
  CalculatedPoints,
  configs,
  ExamResultPoints,
  GradesPoints,
  initialData,
  InputData,
  PointsCalculator,
} from '@warsawlo/points-calculator';
import formConfig from './calculatorFormConfig';
import CalculatorMatrixSection from './CalculatorMatrixSection';
import CalculatorActivitiesSection from './CalculatorActivitiesSection';
import CalculatorTotal from './CalculatorTotal';

const { initialInputData, initialCalculatedPoints } = initialData;
const { config2018_2019: CONFIG_2018_2019 } = configs;

const Calculator: FC = () => {
  const calc = useMemo(() => new PointsCalculator(CONFIG_2018_2019), []);
  const [points, setPoints] = useState<CalculatedPoints>(initialCalculatedPoints);
  const formMethods = useForm({
    defaultValues: initialInputData,
  });

  useEffect(() => {
    const subscription = formMethods.watch((values, { name }) => {
      const data = { ...calc.data };
      let val = _.get(values, name as string);

      if (['string', 'number'].includes(typeof val)) {
        const parsed = parseFloat(val);
        val = !Number.isNaN(parsed) ? parsed : null;
      }
      _.set(data, name as string, val);
      calc.setData(data as InputData);
      setPoints(calc.points);
    });
    return () => subscription.unsubscribe();
  }, [formMethods, calc]);

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
      <div className="mt-5 lg:mt-0 lg:ml-5">
        <CalculatorTotal total={points.total} />
      </div>
    </div>
  );
};

export default Calculator;
