import React, {createElement, FC, useState} from "react";
import {SearchControlProps, useSearchControl} from "../../hooks/useSearchControl";
import {searchViews} from "../../data/searchViews";
import styled from "../../styling/styled";

const Icons = styled.div`
  button{
    background: none;
    border: none;
    outline: none;
    padding: 10px;
    
    svg {
      width: 1.3em;
      height: 1.3em;
    }
  }
`;

const defaultView = 'grid';

const SearchViewControl: FC<SearchControlProps> = ({payload$}) => {
    const { state, updateState } = useSearchControl<string | null>({
        key: 'view',
        defaultValue: defaultView,
        payload$
    });

    return (
        <Icons>
            {
                searchViews.map(view => (
                    <button onClick={() => updateState(view.id)}>
                        {createElement(view.iconComponent)}
                    </button>
                ))
            }
        </Icons>
    )
};

export default SearchViewControl;
