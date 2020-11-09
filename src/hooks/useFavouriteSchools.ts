import { useState, useEffect } from 'react';
import {
  getFavSchoolsFromStorage,
  saveFavSchoolsToStorage,
} from '../utils/localStorageFavSchools';

export const useFavouriteSchools = (schoolID: string | undefined) => {
  const favouritesList = getFavSchoolsFromStorage();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    const isSchoolFavourite = favouritesList.includes(schoolID);
    setIsFavourite(isSchoolFavourite);
  }, [schoolID, favouritesList]);

  const handleFavourite = () => {
    const newFavouritesList = isFavourite
      ? favouritesList.filter((elem: string) => elem !== schoolID)
      : [...favouritesList, schoolID];

    saveFavSchoolsToStorage(newFavouritesList);
    setIsFavourite(!isFavourite);
  };

  return { isFavourite, handleFavourite };
};
