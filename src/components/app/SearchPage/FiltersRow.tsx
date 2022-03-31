import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useProjectConfig } from '../../../config/projectConfigContext';
import filtersComponents from './filters';
import styles from './filters/styles/FiltersRow.module.css';
import { SearchViewConfig } from '../../../config/types';

type FiltersValues = Record<string, string | unknown[]>;

interface UseFiltersValuesReturnType {
  filtersValues: FiltersValues;
  setFiltersValues: Dispatch<SetStateAction<FiltersValues>>;
}

export const useFiltersValues = (): UseFiltersValuesReturnType => {
  const { searchView } = useProjectConfig();
  const { filters: filtersConfig } = searchView as SearchViewConfig;
  const [filtersValues, setFiltersValues] = useState<FiltersValues>(
    Object.fromEntries(
      (filtersConfig as SearchViewConfig['filters']).map(({ key, initialValue }) => [
        key,
        initialValue,
      ]),
    ),
  );

  return { filtersValues, setFiltersValues };
};

const AlphaV3FiltersRow: FC<UseFiltersValuesReturnType> = ({ setFiltersValues, filtersValues }) => {
  const { searchView } = useProjectConfig();
  const { filters: filtersConfig } = searchView as SearchViewConfig;

  const handleFiltersChange = (filterKey: string) => (value: unknown[] | string) => {
    setFiltersValues({
      ...filtersValues,
      [filterKey]: value,
    });
  };

  return (
    <div className={styles.filtersRow}>
      {filtersConfig.map(({ options, key, component }) => {
        const FilterComponent = filtersComponents[component];
        return (
          <FilterComponent
            filterKey={key}
            options={options}
            onChange={handleFiltersChange(key)}
            value={filtersValues[key] as string}
          />
        );
      })}
    </div>
  );
};

export default AlphaV3FiltersRow;
