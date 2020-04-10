export const PER_PAGE = 10;

export const getTotalPages = (count: number) => Math.ceil(count / PER_PAGE);
