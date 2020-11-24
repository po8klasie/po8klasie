type ParamsMode = 'api' | 'search';
type Serializer = (
  [key, value]: [string, any],
  p: URLSearchParams,
  mode: ParamsMode,
) => URLSearchParams;
type Deserializer = (key: string, p: URLSearchParams) => any;

export const basicSerializer: Serializer = ([key, value], p, mode) => {
  p.set(key, value);

  if (!value && p.has(key)) p.delete(key);
  return p;
};

export const basicDeserializer: Deserializer = (key, p) => {
  const value = p.get(key);

  if (!value) {
    if (p.has(key)) p.delete(key);
    return null;
  }
  return value;
};

export const arraySerializer: Serializer = ([key, value], p, mode) => {
  p.set(key, value.join(mode === 'search' ? ',' : '|'));

  if (!value && value.length === 0 && p.has(key)) p.delete(key);
  return p;
};

export const arrayDeserializer: Deserializer = (key, p) => {
  const value = p.get(key);

  if (!value || !Array.isArray(value.split(',')) || value.split(',').length === 0) {
    if (p.has(key)) p.delete(key);
    return null;
  }
  return value.split(',');
};

export const pageNumberSerializer: Serializer = ([key, value], p, mode) => {
  if (mode === 'search' && value < 2) return p;
  return basicSerializer([key, value], p, mode);
};

export const pageNumberDeserializer: Deserializer = (key, p) => {
  const value = basicDeserializer(key, p);
  return parseInt(value, 10) && value > 1 ? value : null;
};
