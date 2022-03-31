import React, { ChangeEvent, ComponentType, FC } from 'react';
import dynamic from 'next/dynamic';
import styles from './styles/FiltersRow.module.css';

export interface TextFilterOptions {
  placeholder?: string;
  icon?: string;
}

interface TextFilterProps {
  value: unknown;
  onChange: (value: string) => void;
  options?: TextFilterOptions;
}

const TextFilter: FC<TextFilterProps> = ({ value, onChange, options }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  const icon = options?.icon as string;
  const Icon = icon
    ? dynamic(
        () => import('react-icons/all').then((bundle) => bundle[icon]) as Promise<ComponentType>,
        {
          ssr: false,
        },
      )
    : () => null;

  return (
    <div className={styles.textInputWrapper}>
      <input
        className={styles.textInput}
        placeholder={options?.placeholder}
        type="text"
        value={value as string}
        onChange={handleChange}
      />
      <Icon />
    </div>
  );
};

export default TextFilter;
