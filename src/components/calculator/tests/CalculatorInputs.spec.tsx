import { fireEvent, render } from '@testing-library/react';
import * as reactHookForm from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { ExamResultInput, GradeInput } from '../CalculatorInputs';

let useFormContextMockedFunctions = {
  setValue: jest.fn(),
  setError: jest.fn(),
};

beforeEach(() => {
  reactHookForm.useFormContext = jest.fn().mockImplementation(() => {
    const [value, setValue] = useState('');
    const ref = useRef({
      setValue: jest.fn().mockImplementation((_, v) => setValue(v)),
      setError: jest.fn(),
    });

    useEffect(() => {
      useFormContextMockedFunctions = ref.current;
    }, []);

    return {
      setValue: ref.current.setValue,
      setError: ref.current.setError,
      watch: () => value,
    };
  });
});

afterEach(() => {
  jest.clearAllMocks();
  useFormContextMockedFunctions = {
    setValue: jest.fn(),
    setError: jest.fn(),
  };
});

describe('components/calculator/CalculatorInputs', () => {
  describe('GradeInput', () => {
    it(`accepts last char`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '2' } });
      expect(input).toHaveValue('2');
    });

    it(`clears on Backspace`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '4' } });
      fireEvent.keyDown(input, { key: 'Backspace' });
      expect(input).toHaveValue('');
    });

    it(`clears on Delete`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: 'a' } });
      fireEvent.keyDown(input, { key: 'Delete' });
      expect(input).toHaveValue('');
    });

    it(`calls setValue with arg null on Backspace`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'Backspace' });
      expect(useFormContextMockedFunctions.setValue).toHaveBeenCalledWith('foo', null);
    });

    it(`calls setValue with arg null on Delete`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'Delete' });
      expect(useFormContextMockedFunctions.setValue).toHaveBeenCalledWith('foo', null);
    });

    it(`preserves value when key different than 1..6, Delete, Backspace was pressed`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '2' } });
      fireEvent.keyDown(input, { key: 'ArrowLeft' });
      expect(input).toHaveValue('2');
    });

    it(`does not call setValue when key different than 1..6, Delete, Backspace was pressed`, () => {
      const wrapper = render(<GradeInput inputId="foo" />);
      const input = wrapper.getByTestId('input');
      fireEvent.keyDown(input, { key: 'ArrowLeft' });
      expect(useFormContextMockedFunctions.setValue).not.toHaveBeenCalled();
    });

    it(`calls setValue with arg null when invalid value was entered`, () => {
      const wrapper = render(<GradeInput inputId="bar" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: 'c' } });
      expect(useFormContextMockedFunctions.setValue).toHaveBeenCalledWith('bar', null);
    });

    it(`calls setError when invalid value was entered`, () => {
      const wrapper = render(<GradeInput inputId="bar" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: 'g' } });
      expect(useFormContextMockedFunctions.setError).toHaveBeenCalledWith('bar', {
        message: 'Invalid value',
      });
    });

    const possibleGrades = [1, 2, 3, 4, 5, 6];

    possibleGrades.forEach((grade) => {
      it(`calls setValue when valid value (${grade}) was entered`, () => {
        const wrapper = render(<GradeInput inputId="bar" />);
        const input = wrapper.getByTestId('input');
        fireEvent.change(input, { target: { value: grade } });
        expect(useFormContextMockedFunctions.setValue).toHaveBeenCalledWith('bar', grade);
      });

      it(`does not call setError when valid value (${grade}) was entered`, () => {
        const wrapper = render(<GradeInput inputId="bar" />);
        const input = wrapper.getByTestId('input');
        fireEvent.change(input, { target: { value: grade } });
        expect(useFormContextMockedFunctions.setError).not.toHaveBeenCalled();
      });
    });
  });

  describe('ExamResultInput', () => {
    it(`accepts number up to 2 digits`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '99' } });
      expect(input).toHaveValue('99');
    });

    it(`doesn't accept > 100`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '400' } });
      expect(input).toHaveValue('');
    });

    it(`calls setValue with arg value/100 when value is valid`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '87' } });
      expect(useFormContextMockedFunctions.setValue).toHaveBeenCalledWith('fizz', 0.87);
    });
    it(`calls setValue with arg null when value is invalid`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '103' } });
      expect(useFormContextMockedFunctions.setValue).toHaveBeenCalledWith('fizz', null);
    });

    it(`calls setError when invalid value was entered`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '-21' } });
      expect(useFormContextMockedFunctions.setError).toHaveBeenCalledWith('fizz', {
        message: 'Invalid value',
      });
    });

    it(`does not call setError when valid value was entered`, () => {
      const wrapper = render(<ExamResultInput inputId="fizz" />);
      const input = wrapper.getByTestId('input');
      fireEvent.change(input, { target: { value: '12' } });
      expect(useFormContextMockedFunctions.setError).not.toHaveBeenCalled();
    });
  });
});
