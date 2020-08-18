import { environment } from '../environments/environment';

const fetchData = (path: string) => {
  return fetch(`${environment.API_URL}${path}`).then((res) => res.json());
};

export default fetchData;
