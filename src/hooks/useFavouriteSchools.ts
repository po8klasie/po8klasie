import { useState } from 'react';
import {
  getFavSchoolsFromLocalStorage,
  saveFavSchoolsToLocalStorage,
} from '../utils/localStorageFavSchools';

export const useFavouriteSchools = () => {
  const favouriteSchoolsFromStorage = getFavSchoolsFromLocalStorage();
  const [favouriteSchools, setFavouriteSchools] = useState<string[]>(
    favouriteSchoolsFromStorage,
  );

  const isSchoolFavourite = (schoolID: string) =>
    favouriteSchools.includes(schoolID);

  const toggleFavouriteSchool = (schoolID: string) => {
    const newFavouriteSchools = isSchoolFavourite(schoolID)
      ? favouriteSchools.filter((elem: string) => elem !== schoolID)
      : [...favouriteSchools, schoolID];

    saveFavSchoolsToLocalStorage(newFavouriteSchools);
    setFavouriteSchools(newFavouriteSchools);
  };

  return { isSchoolFavourite, toggleFavouriteSchool, favouriteSchools };
};
