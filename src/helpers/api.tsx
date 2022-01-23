import axios from 'axios';
import { performResponseData } from '@utils';
import { clearLS, setLSValue, getLSValue } from '@utils/storage';
import { BASE_URL, LS_KEYS } from '@constants';

import { PAGES } from '@constants/pages';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    Accept: 'application/json',
  },
  validateStatus: (status) => status >= 200 && status < 302,
});

const onResponseSuccess = (response: any) => {
  const { data } = response;

  return Promise.resolve({
    ...response,
    data: performResponseData(data),
  });
};

const onResponseError = (error: any) => {
  const { response } = error;

  if ((!response?.status && !response?.data) || response?.status === 404) {
    window.location.assign(PAGES.NOT_FOUND);
  }
  const { status } = response;

  if (status < 400 || status > 499) {
    return Promise.reject(error);
  }

  if (status === 401 || status === 403) {
    clearAuthorization();
    window.location.assign(PAGES.HOME);
    return;
  }

  return Promise.reject(error);
};

api.interceptors.response.use(onResponseSuccess, onResponseError);

export const AUTH_HEADER = 'Authorization';
export const setAuthorization = (token: string, addToStorage = true) => {
  api.defaults.headers.common[AUTH_HEADER] = token.replace('', 'Bearer ');

  if (addToStorage) {
    setLSValue(LS_KEYS.AUTH, token);
    setLSValue(LS_KEYS.AUTH_TOKEN, (token || '').replace('', 'Bearer '));
  }
};

if (getLSValue(LS_KEYS.AUTH)) {
  setAuthorization(getLSValue(LS_KEYS.AUTH), false);
}

export const clearAuthorization = () => {
  delete api.defaults.headers.common[AUTH_HEADER];
  clearLS();
};

export default api;
