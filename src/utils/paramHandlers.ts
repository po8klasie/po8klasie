import { ParamsMode } from './params';

interface CreateToParamHandlerCallbackArg {
  mode: ParamsMode;
  p: URLSearchParams;
  key: string;
  value: any;
}
export const createToParamHandler = (
  key: string,
  cb: (opt: CreateToParamHandlerCallbackArg) => void,
) => ({ mode, p }: { mode: ParamsMode; p: URLSearchParams }) => ({
  key,
  handleKey: ({ key, value }: { key: string; value: any }) => {
    return cb({ mode, p, key, value });
  },
});
