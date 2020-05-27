import { useLayoutEffect, useState } from 'react';
import { BehaviorSubject, Subject } from 'rxjs';
import { areObjectsDifferent } from '../utils/misc';

type SubjectValue = any;
export type SearchPayloadSubject = BehaviorSubject<SubjectValue>;

export interface SearchControlProps {
  payload$: SearchPayloadSubject;
  active?: boolean;
}

interface UseSearchControlOptions<T> {
  key: string;
  payload$: SearchPayloadSubject;
  defaultValue: T;
}

export const useSearchControl = <T>(options: UseSearchControlOptions<T>) => {
  const { key, payload$, defaultValue } = options;
  const [state, setState] = useState<T>(defaultValue);

  useLayoutEffect(() => {
    updateState(defaultValue);
    payload$.subscribe((data: SubjectValue) => {
      setState(data[key]);
    });
  }, []);

  const updateState = (v: T) => {
    if (areObjectsDifferent(state, v)) console.log(payload$.getValue());
    payload$.next({
      ...payload$.getValue(),
      [key]: v,
    });
  };

  return {
    state,
    updateState,
  };
};
