import React, {FC} from "react";
import {InputWithAddon} from "../Input";
import {SearchControlProps, useSearchControl} from "../../hooks/useSearchControl";

const SearchInputControl: FC<SearchControlProps> = ({payload$}) => {

    const { state, updateState } = useSearchControl<string>({
        key: 'query',
        defaultValue: '',
        payload$
    });

    const handleQueryChange = (e: any) => updateState(e.target.value);

    return (
        <InputWithAddon
            addon={<span className="material-icons">search</span>}
            addonPosition={'left'}
            placeholder="Szukaj szkoły"
            onChange={handleQueryChange}
            value={state}
        />
    )
};

export default SearchInputControl;
