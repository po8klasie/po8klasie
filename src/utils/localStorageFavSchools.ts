import * as Sentry from '@sentry/react';
const FAVOURITES_SCHOOLS_STORAGE_KEY = 'favouriteSchools';

export const getFavSchoolsFromLocalStorage = () => {
  const dataFromStorage = localStorage.getItem(FAVOURITES_SCHOOLS_STORAGE_KEY);
  if (!dataFromStorage) return [];
  let data = [];
  try {
    data = JSON.parse(dataFromStorage);
  } catch (error) {
    Sentry.captureException(error);
  }
  return data;
};

export const saveFavSchoolsToLocalStorage = (item: object) => {
  return localStorage.setItem(
    FAVOURITES_SCHOOLS_STORAGE_KEY,
    JSON.stringify(item),
  );
};
