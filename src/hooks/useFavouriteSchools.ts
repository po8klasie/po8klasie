import { useState, useEffect } from 'react';
import {
  getFavSchoolsFromLocalStorage,
  saveFavSchoolsToLocalStorage,
} from '../utils/localStorageFavSchools';

export const useFavouriteSchools = (schoolID: string | undefined) => {
  const favouritesList = getFavSchoolsFromLocalStorage();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    const isSchoolFavourite = favouritesList.includes(schoolID);
    setIsFavourite(isSchoolFavourite);
  }, [schoolID, favouritesList]);

  const toggleFavouriteSchool = () => {
    const newFavouritesList = isFavourite
      ? favouritesList.filter((elem: string) => elem !== schoolID)
      : [...favouritesList, schoolID];

    saveFavSchoolsToLocalStorage(newFavouritesList);
    setIsFavourite(!isFavourite);
  };

  return { isFavourite, toggleFavouriteSchool };
};
