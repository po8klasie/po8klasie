import {ParamsMode} from "./params";

export const transformArr = (arr: any[], mode: ParamsMode) =>
    arr.join(mode === 'search' ? ',' : '|');
