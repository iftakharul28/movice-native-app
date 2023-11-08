import { baseApiUrl, apiKey } from '../constants/variables';

const Get = async ({ path }: { path: string }): Promise<Response> => {
  return fetch(`${baseApiUrl}?apiKey=${apiKey}${path}`, {
    method: 'GET',
  });
};
const http = {
  get: Get,
};
export default http;
