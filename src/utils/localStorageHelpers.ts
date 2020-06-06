const FAVOURITES_SCHOOLS_STORAGE_KEY = 'favourite-schools';

export const getFavSchoolsFromStorage = () => {
    const dataFromStorage = localStorage.getItem(FAVOURITES_SCHOOLS_STORAGE_KEY);
    if (!dataFromStorage) return [];
    let data = [];
    try {
        data = JSON.parse(dataFromStorage);
    } catch(e) {
        console.error(e);
    }
    return data;
};

export const saveFavSchoolsToStorage = (item: object) => {
    return localStorage.setItem(FAVOURITES_SCHOOLS_STORAGE_KEY, JSON.stringify(item));
};
