import React, { FC, useEffect, useState } from 'react';
import Dropdown from '../Dropdown';
import { orderingTypes } from '../../data/ordering';
import {
  SearchControlProps,
  useSearchControl,
} from '../../hooks/useSearchControl';
import { useParamsChangeHandler } from '../../hooks/useParamsChangeHandler';
import {createSearchControllerConfig} from "../../utils/searchControllers";
import {DEFAULT_VIEW_ID, searchViews} from "../../data/searchViews";
import {useDispatch, useSelector} from "react-redux";
import {fetchSchools} from "../../store/modules/schools";
import {getSearchViewById} from "../../utils/searchViews";

const orderingDropdownChoices = orderingTypes.map(type => ({
  label: type.title,
  id: type.orderingId,
}));

const SearchOrderingController: FC = () => {
  const { searchData } = useSelector((state: any) => ({
    searchData: state.schools.searchData
  }));
  const [ordering, setOrdering] = useState(searchData.ordering);
  const [active, setActive] = useState(getSearchViewById(searchData.view)?.layout?.enableOrdering);

  useEffect(() => {
    setActive(getSearchViewById(searchData.view)?.layout?.enableOrdering)
    setOrdering(null);
    // handleChange()
  }, [searchData.view]);
  useEffect(() => {
    if(searchData.ordering !== ordering)
      setOrdering(searchData.ordering);
  }, [searchData.ordering]);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(fetchSchools({
      searchData: {
        ...searchData,
        ordering
      }
    }));
  };
  const changeOrdering = (newOrdering: string) => setOrdering(newOrdering === ordering ? null : newOrdering);

  useEffect(() => {
    setOrdering(null)
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <Dropdown
      title={'Sortuj po'}
      choices={orderingDropdownChoices}
      onSelect={changeOrdering}
      onSubmit={handleChange}
      selected={ordering ? [ordering] : []}
    />
  );
};

export const searchOrderingControllerConfig = createSearchControllerConfig('ordering', {
  defaultValue: null,
  toParamHandler: ({value, key, mode, p }) => {
    const orderingType = orderingTypes.find(o => o.orderingId === value);
    if (!orderingType || !value){
      if(p.has(key)) p.delete(key);
      return
    }

    if (mode === 'api')
      p.set(key, orderingType.fields.join(','));
    else
      p.set(key, orderingType.orderingId);
  },
  fromParamHandler: ({p, key}) => {
    const param = p.has(key) && p.get(key) ? p.get(key) : null;
    if(!param)
      return null;

    const orderingType = orderingTypes.find(t => t.orderingId === param.trim());
    if(orderingType)
      return orderingType.orderingId;

    return null;
  }
});

export default SearchOrderingController;
