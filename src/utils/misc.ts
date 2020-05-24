export const splitArrayInHalf = <T>(arr: T[]): T[][] => {
  const half = Math.ceil(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half, arr.length)];
};

export const removeFromArray = <T extends {}>(arr: T[], element: T) =>
    arr.filter((el: T) => el !== element);

export const areObjectsDifferent = (a: any, b: any): boolean =>
  JSON.stringify(a) !== JSON.stringify(b);

export const removeFromObject = (obj: any, keys: any[]) => {
  let output = {...obj};
  keys.forEach(key => {
    if(key in obj)
      delete output[key];
  });
  return output;
};
export const withoutPageAndView = (obj: any) => removeFromObject(obj, ['view', 'page']);
