import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { debounce } from 'lodash';
import styled from '../../../../styling/styled';
import { InputWithAddon } from '../../../Input';

const SearchIcon = styled(MdSearch)`
  font-size: 24px;
`;

interface QueryFilterProps {
  query: string;
  onQueryChange: (query: string) => void;
}

const QueryFilter: FC<QueryFilterProps> = ({ query, onQueryChange }) => {
  const [value, setValue] = useState(query);

  const updateQuery = useCallback(debounce(onQueryChange, 100), []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    setValue(targetValue);
    updateQuery(targetValue);
  };

  return (
    <InputWithAddon
      addon={<SearchIcon />}
      addonPosition="left"
      placeholder="Szukaj szkoły"
      onChange={handleChange}
      value={value}
    />
  );
};

export default QueryFilter;