import { useFormContext } from 'react-hook-form';
import { ChangeEvent, FC, HTMLProps, KeyboardEvent, useState } from 'react';
import { isExamResultValid, isGradeValid } from '@warsawlo/points-calculator/lib/utils/validators';

export interface CalculatorInputProps extends HTMLProps<HTMLInputElement> {
  inputId: string;
}

export const GradeInput: FC<CalculatorInputProps> = ({ inputId, ...props }) => {
  const { register, setValue: setValueOriginal, setError } = useFormContext();
  const r = register(inputId);
  const setValue = (value: unknown) => setValueOriginal(inputId, value);
  const [internalValue, setInternalValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (['Backspace', 'Delete'].includes(e.key)) {
      setInternalValue('');
      setValue(0);
      return;
    }
    if (e.key.length > 1) return;

    setInternalValue(e.key);

    const parsedKey = parseInt(e.key, 10);
    if (isGradeValid(parsedKey)) setValue(parsedKey);
    else {
      setValue(0);
      setError(inputId, { message: 'Invalid value' });
    }
  };

  const inputProps = {
    ...props,
    ...r,
    placeholder: '5',
    'aria-label': 'Ocena',
    value: internalValue,
    onKeyDown: handleKeyDown,
  };

  return <input {...inputProps} data-testid="input" />;
};

export const ExamResultInput: FC<CalculatorInputProps> = ({ inputId, ...props }) => {
  const { setValue: setValueOriginal, setError } = useFormContext();
  const setValue = (value: unknown) => setValueOriginal(inputId, value);
  const [internalValue, setInternalValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length <= 3) {
      setInternalValue(value);
    }

    const score = parseInt(value, 10) / 100;
    if (isExamResultValid(score)) {
      setValue(score);
    } else {
      setValue(0);
      setError(inputId, { message: 'Invalid value' });
    }
  };

  return (
    <input
      {...props}
      onChange={handleChange}
      value={internalValue}
      maxLength={3}
      placeholder="%"
      data-testid="input"
    />
  );
};
