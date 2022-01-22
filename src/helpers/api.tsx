import axios from 'axios';
import { hasError, performResponseData } from '@utils';
import { clearLS, setLSValue, getLSValue } from '@utils/storage';
import { BASE_URL, API_ERRORS, LS_KEYS } from '@constants';

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
  const { status, data } = response;

  if (status < 400 || status > 499) {
    return Promise.reject(error);
  }

  const authError =
    hasError(API_ERRORS.SESSION_EXPIRED, 'base', data) ||
    hasError(API_ERRORS.REVOKED, 'base', data) ||
    hasError(API_ERRORS.DELETED, 'base', data) ||
    hasError(API_ERRORS.SUSPENDED, 'base', data) ||
    hasError(API_ERRORS.LOCKED, 'base', data);

  //   const url = config ? config.url : '';
  //   const isAuthUrl = url.endsWith(URLS.LOGIN);

  if ((status === 401 || status === 403) && authError) {
    clearAuthorization();
    window.location.assign(PAGES.HOME);
    return;
  }

  return Promise.reject(error);
};

api.interceptors.response.use(onResponseSuccess, onResponseError);

export const AUTH_HEADER = 'authorization';
export const setAuthorization = (token: string, addToStorage = true) => {
  api.defaults.headers.common[AUTH_HEADER] = token;

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
