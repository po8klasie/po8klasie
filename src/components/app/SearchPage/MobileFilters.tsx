import React, { FC, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { mobileFiltersComponents } from './filters';
import { useProjectConfig } from '../../../config/projectConfigContext';
import { SearchViewConfig } from '../../../config/types';
import { BiFilterAlt } from '@react-icons/all-files/bi/BiFilterAlt';
import { FiX } from '@react-icons/all-files/fi/FiX';

interface MobileFiltersProps {
  onFiltersChange: (filterKey: string) => (value: unknown[] | string) => void;
  filtersValues: Record<string, string | unknown[]>;
}

const MobileFilters: FC<MobileFiltersProps> = ({ onFiltersChange, filtersValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchView } = useProjectConfig();
  const { filters: filtersConfig } = searchView as SearchViewConfig;
  return (
    <>
      <button
        className="rounded-xl border border-light px-3 py-1 mx-2 flex items-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiFilterAlt className="mr-2" />
        Filtry
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel className="top-0 left-0 h-full w-full fixed z-40 bg-appBg pt-navbarHeight">
          <div className="flex items-center justify-end">
            <button className="p-2" onClick={() => setIsOpen(false)}>
              <FiX className="text-xl" />
            </button>
          </div>
          {filtersConfig.map(({ options, key, component, displayInRowOnMobile }) => {
            const FilterComponent =
              mobileFiltersComponents[component as keyof typeof mobileFiltersComponents];
            if (displayInRowOnMobile) return null;
            return (
              <FilterComponent
                options={options}
                onChange={onFiltersChange(key)}
                value={filtersValues[key]}
              />
            );
          })}
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default MobileFilters;
