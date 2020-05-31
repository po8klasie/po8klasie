import React, { FC } from 'react';
import styled from '../../../styling/styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSchools } from '../../../store/modules/schools';
import { DEFAULT_VIEW_ID, searchViews } from '../../../data/searchViews';
import { createSearchControllerConfig } from '../../../utils/searchControllers';

const Switch = styled.div`
  button {
    background: none;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    font-family: inherit;
    cursor: pointer;
  }
`;

const SearchViewController: FC = () => {
  const { searchData } = useSelector((state: any) => ({
    searchData: state.schools.searchData,
  }));
  const dispatch = useDispatch();

  const changeView = (viewId: string) => {
    dispatch(
      fetchSchools({
        searchData: {
          ...searchData,
          view: viewId,
        },
      }),
    );
  };

  return (
    <Switch>
      {searchViews
        .filter(v => v.id !== searchData.view)
        .map(v => {
          return (
            <button onClick={() => changeView(v.id)} key={v.id}>
              {v.title}
            </button>
          );
        })}
    </Switch>
  );
};

export const searchViewControllerConfig = createSearchControllerConfig('view', {
  defaultValue: DEFAULT_VIEW_ID,
  toParamHandler: ({ value, key, mode, p }) => {
    if (mode === 'search' && value !== DEFAULT_VIEW_ID)
      return p.set(key, value as any);

    if (p.has(key)) p.delete(key);
  },
  fromParamHandler: ({ p, key }) => {
    const param = p.has(key) && p.get(key) ? p.get(key) : null;
    if (!param) return null;

    const view = searchViews.find(v => v.id === param.trim());
    if (view) return view.id;

    return null;
  },
});

export default SearchViewController;
