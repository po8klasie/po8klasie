import { InputWithAddon } from '../../Input';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import styled from '../../../styling/styled';
import { MdSearch } from 'react-icons/md';
import { debounce } from 'lodash';

const SearchIcon = styled(MdSearch)`
  font-size: 24px;
`;

const QueryFilter: FC<any> = ({ query, onQueryChange }) => {
  const [value, setValue] = useState(query);
  const updateQuery = useCallback(debounce(onQueryChange, 100), []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    updateQuery(v);
  };
  return (
    <InputWithAddon
      addon={<SearchIcon />}
      addonPosition={'left'}
      placeholder="Szukaj szkoły"
      onChange={handleChange}
      value={value}
    />
  );
};

export default QueryFilter;
