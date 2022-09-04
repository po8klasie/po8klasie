import TextFilter from './TextFilter';
import DropdownFilter, { MobileDropdownFilter } from './DropdownFilter';

const filtersComponents = {
  text: TextFilter,
  dropdown: DropdownFilter,
};

export const mobileFiltersComponents = {
  text: TextFilter,
  dropdown: MobileDropdownFilter,
};

export default filtersComponents;
