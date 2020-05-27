import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  areObjectsDifferent,
  removeFromObject,
  withoutPageAndView,
} from '../utils/misc';

type SubjectValue = any;
export type SearchPayloadSubject = BehaviorSubject<SubjectValue>;

interface UseParamsChangeHandlerOptions {
  payload$: SearchPayloadSubject;
  excludeKeys: string[];
  deps?: string[];
  onParamsChange: Function;
}

export const useParamsChangeHandler = <T>(
  options: UseParamsChangeHandlerOptions,
) => {
  const lastData = useRef<any>({});

  useLayoutEffect(
    () => {
      const { payload$, onParamsChange } = options;
      const s = payload$.subscribe((data: SubjectValue) => {
        if (
          areObjectsDifferent(
            removeFromObject({ ...data }, options.excludeKeys),
            removeFromObject({ ...lastData.current }, options.excludeKeys),
          )
        ) {
          let prevData = { ...lastData.current };
          lastData.current = { ...data };
          onParamsChange(prevData, { ...data });
        }
      });
      return () => {
        s.unsubscribe();
      };
    },
    options.deps ? options.deps : [],
  );
};
