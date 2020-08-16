const fetchData = (path: string) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`).then((res) =>
    res.json(),
  );
};

export default fetchData;
