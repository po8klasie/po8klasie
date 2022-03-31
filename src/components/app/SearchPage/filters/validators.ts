const validators = {
  string: (v: unknown): boolean => typeof v === 'string' && v.length > 0,
};

export default validators;
