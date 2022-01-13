import { render } from '@testing-library/react';
import CalculatorMatrixRow from '../CalculatorMatrixRow';

const defaultProps = {
  name: 'Some field',
  inputId: 'foo',
  inputComponent: ({ inputId }: { inputId: string }) => (
    <span data-testid="input-component">{inputId}</span>
  ),
  calculatedPoints: 10,
};

describe('components/calculator/CalculatorMatrixRow', () => {
  it('renders inputComponent with proper inputId prop', () => {
    const wrapper = render(<CalculatorMatrixRow {...defaultProps} />);
    expect(wrapper.getByTestId('input-component')).toHaveTextContent(defaultProps.inputId);
  });
});
