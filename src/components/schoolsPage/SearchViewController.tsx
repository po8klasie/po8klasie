import React, { createElement, FC, useState } from 'react';
import {
  SearchControlProps,
  useSearchControl,
} from '../../hooks/useSearchControl';
import {DEFAULT_VIEW_ID, searchViews} from '../../data/searchViews';
import styled from '../../styling/styled';
import {createSearchControllerConfig} from "../../utils/searchControllers";
import SearchQueryController from "./SearchQueryController";
import {useDispatch, useSelector} from "react-redux";
import {fetchSchools} from "../../store/modules/schools";

const Icons = styled.div`
  button {
    background: none;
    border: none;
    outline: none;
    padding: 10px;
    cursor: pointer;

    svg {
      width: 1.3em;
      height: 1.3em;
    }
  }
`;

const SearchViewController: FC = () => {
  const { searchData } = useSelector((state: any) => ({
    searchData: state.schools.searchData
  }));
  const dispatch = useDispatch();

  const changeView = (viewId: string) => {
    dispatch(fetchSchools({
      searchData: {
        ...searchData,
        view: viewId
      }
    }));
  };

  return (
    <Icons>
      {searchViews.map(view => (
        <button onClick={() => changeView(view.id)}>
          {createElement(view.iconComponent)}
        </button>
      ))}
    </Icons>
  );
};


export const searchViewControllerConfig = createSearchControllerConfig('view', {
  defaultValue: DEFAULT_VIEW_ID,
  toParamHandler: ({value, key, mode, p }) => {

    if (mode === 'search' && value !== DEFAULT_VIEW_ID)
      return p.set(key, value as any);

    if(p.has(key)) p.delete(key)
  },
  fromParamHandler: ({p, key}) => {
    const param = p.has(key) && p.get(key) ? p.get(key) : null;
    if(!param)
      return null;

    const view = searchViews.find(v => v.id === param.trim());
    if(view)
        return view.id;

    return null;
  }
});

export default SearchViewController;
