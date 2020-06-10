import { toParams } from './params';
import { schoolsParamsOverwrites } from '../data/schoolsParamsOverwrites';

export const generateSchoolUrl = (searchData: any) => {
  const paramsStr = toParams(
    {
      ...searchData,
      ...schoolsParamsOverwrites,
    },
    'api',
  );

  return `${process.env.REACT_APP_API_URL}/school/?${paramsStr}`;
};

export const getPageNumberFromPaginationUrl = (
  prevUrl: string,
  nextUrl: string,
): number => {
  if (nextUrl)
    return parseInt(new URL(nextUrl).searchParams.get('page') as any) - 1;

  if (prevUrl) {
    const page = parseInt(new URL(prevUrl).searchParams.get('page') as any) + 1;
    if (page) return page;
    else return 2;
  }

  return 1;
};
