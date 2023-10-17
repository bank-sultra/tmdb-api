import axios, {AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

export const request = async (
  path: string,
  method: string,
  options?: AxiosRequestConfig,
) => {
  const instance = axios.create({
    baseURL: Config.API_TMDB_URL,
    headers: {Authorization: `Bearer ${Config.API_TMDB_ACCESS_TOKEN}`},
  });

  const res = await instance(path, {
    method,
    ...options,
  });

  return res.data;
};
