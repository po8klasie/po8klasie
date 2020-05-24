import React, {FC, useEffect, useState} from "react";
import Dropdown from "../Dropdown";
import {orderingTypes} from "../../data/ordering";
import {SearchControlProps, useSearchControl} from "../../hooks/useSearchControl";
import {useParamsChangeHandler} from "../../hooks/useParamsChangeHandler";

const orderingDropdownChoices = orderingTypes.map(type => ({
    label: type.title,
    id: type.orderingId
}));

const SearchOrderingControl: FC<SearchControlProps> = ({payload$, active}) => {
    const [localState, setLocalState] = useState<string | null>(null);
    const { state, updateState } = useSearchControl<string | null>({
        key: 'ordering',
        defaultValue: null,
        payload$
    });

    const syncStateWithLocal = () => updateState(localState);
    useEffect(() => {
        if(!active)
            updateState(null);
    }, [active]);
    if(!active){
        return null;
    }

    return (
        <Dropdown
            title={'Sortuj po'}
            choices={orderingDropdownChoices}
            onSelect={setLocalState}
            onSubmit={syncStateWithLocal}
            selected={localState ? [localState] : []}
        />
    )
};

export default SearchOrderingControl;
