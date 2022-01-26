import { useFormContext } from 'react-hook-form';
import { ChangeEvent, FC, HTMLProps, KeyboardEvent } from 'react';
import { isExamResultValid, isGradeValid } from '@warsawlo/points-calculator/lib/utils/validators';

export interface CalculatorInputProps extends HTMLProps<HTMLInputElement> {
  inputId: string;
}

export const GradeInput: FC<CalculatorInputProps> = ({ inputId, ...props }) => {
  const { watch, setValue: setValueOriginal, setError } = useFormContext();
  const value = watch(inputId);
  const setValue = (updatedValue: number | null) => setValueOriginal(inputId, updatedValue);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (['Backspace', 'Delete'].includes(e.key)) {
      e.preventDefault();
      setValue(null);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value.at(-1);

    const parsedValue = parseInt(updatedValue, 10);
    if (isGradeValid(parsedValue)) setValue(parsedValue);
    else {
      setValue(null);
      setError(inputId, { message: 'Invalid value' });
    }
  };

  const inputProps: Partial<HTMLProps<HTMLInputElement>> = {
    ...props,
    placeholder: '5',
    'aria-label': 'Ocena',
    inputMode: 'numeric',
    value: value ?? '',
    onKeyDown: handleKeyDown,
    onChange: handleChange,
    autoComplete: 'off',
  };

  return <input {...inputProps} data-testid="input" />;
};

export const ExamResultInput: FC<CalculatorInputProps> = ({ inputId, ...props }) => {
  const { watch, setValue: setValueOriginal, setError } = useFormContext();
  const value = watch(inputId);
  const setValue = (updatedValue: number | null) => setValueOriginal(inputId, updatedValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const score = parseInt(e.target.value, 10) / 100;
    if (isExamResultValid(score)) {
      setValue(score);
    } else {
      setValue(null);
      setError(inputId, { message: 'Invalid value' });
    }
  };

  return (
    <input
      {...props}
      onChange={handleChange}
      value={value ? value * 100 : ''}
      inputMode="decimal"
      maxLength={3}
      placeholder="%"
      data-testid="input"
    />
  );
};
