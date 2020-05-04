export const splitArrayInHalf = (arr: any[]) => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half, arr.length)];
};
