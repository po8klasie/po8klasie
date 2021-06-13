export const PER_PAGE = 10;

export const getTotalPages = (count: number): number => Math.ceil(count / PER_PAGE);

export const getPaginationOffset = (pageNo: number): number => PER_PAGE * (pageNo - 1);
