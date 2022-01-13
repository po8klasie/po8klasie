import { render } from '@testing-library/react';
import CalculatorTotal from '../CalculatorTotal';

describe('components/calculator/CalculatorTotal', () => {
  it('rounds number to two fraction digits', () => {
    const wrapper = render(<CalculatorTotal total={123.1111} />);
    expect(wrapper.getByTestId('total')).toHaveTextContent('123.11');
  });

  it('rounds number up to two fraction digits', () => {
    const wrapper = render(<CalculatorTotal total={123.126} />);
    expect(wrapper.getByTestId('total')).toHaveTextContent('123.13');
  });
});
