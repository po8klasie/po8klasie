import { DEFAULT_VIEW, searchViews } from '../data/searchViews';

export const getSearchViewById = (viewId: string) =>
  searchViews.find((v) => v.id === viewId) ?? DEFAULT_VIEW;
