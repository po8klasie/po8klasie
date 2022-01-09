import { render } from '@testing-library/react';
import * as reactHookForm from 'react-hook-form';
import CalculatorActivitiesSection, {
  ActivityCheckbox,
  CheckboxData,
} from '../CalculatorActivitiesSection';

beforeEach(() => {
  reactHookForm.useFormContext = () => ({
    register: () => ({}),
  });
});

describe('components/calculator/CalculatorActivitiesSection', () => {
  describe('CalculatorActivityCheckbox', () => {
    it('displays proper label', () => {
      const wrapper = render(<ActivityCheckbox name="Foo" inputProps={{}} calculatedPoints={20} />);
      expect(wrapper.getByTestId('label')).toHaveTextContent('Foo');
    });

    it('passes down input props', () => {
      const wrapper = render(
        <ActivityCheckbox name="Foo" inputProps={{ maxLength: 2 }} calculatedPoints={20} />,
      );
      expect(wrapper.getByTestId('input').getAttribute('maxLength')).toEqual('2');
    });

    it('display calculatedPoints as integer', () => {
      const wrapper = render(
        <ActivityCheckbox name="Foo" inputProps={{ disabled: true }} calculatedPoints={20.2} />,
      );
      expect(wrapper.getByTestId('calculated-points')).toHaveTextContent('20');
    });
  });

  describe('CalculatorActivitiesSection', () => {
    it('renders all checkboxes', () => {
      const checkboxesData: CheckboxData[] = [
        { id: 'merit', name: 'foo' },
        { id: 'activity', name: 'fizz' },
      ];
      const sectionPoints = {
        merit: 2,
        activity: 2,
        accomplishments: [],
      };
      const wrapper = render(
        <CalculatorActivitiesSection
          checkboxesData={checkboxesData}
          sectionPoints={sectionPoints}
        />,
      );
      expect(wrapper.getByTestId('checkboxes').children.length).toEqual(checkboxesData.length);
    });
  });
});
