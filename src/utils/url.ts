const getPathWithPreservedParams = (path: string): string => {
  const currParams = new URL(window.location.href).search;
  return `${path}${currParams ?? ''}`;
};

export default getPathWithPreservedParams;
