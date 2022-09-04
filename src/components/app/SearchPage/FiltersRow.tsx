import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useProjectConfig } from '../../../config/projectConfigContext';
import filtersComponents from './filters';
import styles from './filters/styles/FiltersRow.module.css';
import { SearchViewConfig } from '../../../config/types';
import MobileFilters from './MobileFilters';

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
      {filtersConfig.map(({ options, key, displayInRowOnMobile, component }) => {
        const FilterComponent = filtersComponents[component as keyof typeof filtersComponents];
        return (
          <span className={!displayInRowOnMobile ? 'hidden md:inline-block' : ''}>
            <FilterComponent
              options={options}
              onChange={handleFiltersChange(key)}
              value={filtersValues[key]}
            />
          </span>
        );
      })}
      <MobileFilters onFiltersChange={handleFiltersChange} filtersValues={filtersValues} />
    </div>
  );
};

export default AlphaV3FiltersRow;
