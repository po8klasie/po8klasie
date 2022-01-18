import { fireEvent, render } from '@testing-library/react';
import * as reactHookForm from 'react-hook-form';
import { ExamResultInput, GradeInput } from '../CalculatorInputs';

const useFormContextMockedReturn = {
  register: () => ({
    onChange: jest.fn(),
  }),
  setValue: jest.fn(),
  setError: jest.fn(),
};

beforeEach(() => {
  reactHookForm.useFormContext = () => useFormContextMockedReturn;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('components/calculator/CalculatorInputs', () => {
  describe('GradeInput', () => {
    it(`accepts one char`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'a' });
      fireEvent.keyDown(input, { key: 'b' });
      expect(input).toHaveValue('b');
    });

    it(`clears on Backspace`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'a' });
      fireEvent.keyDown(input, { key: 'Backspace' });
      expect(input).toHaveValue('');
    });

    it(`clears on Delete`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'a' });
      fireEvent.keyDown(input, { key: 'Delete' });
      expect(input).toHaveValue('');
    });

    it(`calls setValue with arg null on Backspace`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'Backspace' });
      expect(useFormContextMockedReturn.setValue).toHaveBeenCalledWith('foo', null);
    });

    it(`calls setValue with arg null on Delete`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'Delete' });
      expect(useFormContextMockedReturn.setValue).toHaveBeenCalledWith('foo', null);
    });

    it(`preserves value when key different than 1..6, Delete, Backspace was pressed`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'c' });
      fireEvent.keyDown(input, { key: 'ArrowLeft' });
      expect(input).toHaveValue('c');
    });

    it(`does not call setValue when key different than 1..6, Delete, Backspace was pressed`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'ArrowLeft' });
      expect(useFormContextMockedReturn.setValue).not.toHaveBeenCalled();
    });

    it(`calls setValue with arg null when invalid value was entered`, () => {
      const wrapper = render(<GradeInput inputId="bar" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'g' });
      expect(useFormContextMockedReturn.setValue).toHaveBeenCalledWith('bar', null);
    });

    it(`calls setError when invalid value was entered`, () => {
      const wrapper = render(<GradeInput inputId="bar" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'g' });
      expect(useFormContextMockedReturn.setError).toHaveBeenCalledWith('bar', {
        message: 'Invalid value',
      });
    });

    const possibleGrades = [1, 2, 3, 4, 5, 6];

    possibleGrades.forEach((grade) => {
      it(`calls setValue when valid value (${grade}) was entered`, () => {
        const wrapper = render(<GradeInput inputId="bar" />);
        const input = wrapper.getByTestId('input');
        fireEvent.keyDown(input, { key: grade });
        expect(useFormContextMockedReturn.setValue).toHaveBeenCalledWith('bar', grade);
      });

      it(`does not call setError when valid value (${grade}) was entered`, () => {
        const wrapper = render(<GradeInput inputId="bar" />);
        const input = wrapper.getByTestId('input');
        fireEvent.keyDown(input, { key: grade });
        expect(useFormContextMockedReturn.setError).not.toHaveBeenCalled();
      });
    });
  });

  describe('ExamResultInput', () => {
    it(`doesn't accept up to 3 chars`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: 'abc' } });
      expect(input).toHaveValue('abc');
    });

    it(`doesn't accept > 3 chars`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: 'abcd' } });
      expect(input).toHaveValue('');
    });

    it(`calls setValue with arg value/100 when value is valid`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '87' } });
      expect(useFormContextMockedReturn.setValue).toHaveBeenCalledWith('fizz', 0.87);
    });
    it(`calls setValue with arg null when value is invalid`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '103' } });
      expect(useFormContextMockedReturn.setValue).toHaveBeenCalledWith('fizz', null);
    });

    it(`calls setError when invalid value was entered`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '-21' } });
      expect(useFormContextMockedReturn.setError).toHaveBeenCalledWith('fizz', {
        message: 'Invalid value',
      });
    });

    it(`does not call setError when valid value was entered`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '12' } });
      expect(useFormContextMockedReturn.setError).not.toHaveBeenCalled();
    });
  });
});
