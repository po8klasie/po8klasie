import axios from 'axios';
import { environment } from '../environments/environment';

const fetchData = (path: string): Promise<any> => {
  return axios.get(`${environment.API_URL}${path}`).then((res) => res.data);
};

export default fetchData;
