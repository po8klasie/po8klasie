export const splitArrayInHalf = <T>(arr: T[]): T[][] => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half, arr.length)];
};

export const removeFromArray = <T>(arr: T[], element: T): T[] =>
  arr.filter((el: T) => el !== element);

export const removeFromObject = (obj: Record<string, unknown>, keys: string[]) => {
  const clonedObj = { ...obj };
  keys.forEach((key) => delete clonedObj[key]);
  return clonedObj;
};
