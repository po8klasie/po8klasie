import {ParamsMode} from "./params";

interface SearchControllerConfig {
    defaultValue: any,
    toParamHandler: (opts: {value: any, key: string, mode: ParamsMode, p: URLSearchParams }) => void
    fromParamHandler: (opts: {p: URLSearchParams, key: string }) => any
}

export const createSearchControllerConfig = (searchDataKey: string, config: SearchControllerConfig) => ({
    [searchDataKey]: config
});
