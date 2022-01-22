import { LS_KEYS } from '@constants';

export const BASE_PREFIX = 'meldCX_';

export const setLSValue = (key: string, value: string) => {
  const val = JSON.stringify(value);
  localStorage.setItem(`${BASE_PREFIX}${key}`, val);
};

export const getLSValue = (key: string) => {
  const val = localStorage.getItem(`${BASE_PREFIX}${key}`) || '';

  try {
    return val ? JSON.parse(val) : val;
  } catch {
    console.log('error in data');
  }
};

export const removeLSValue = (key: string) =>
  localStorage.removeItem(`${BASE_PREFIX}${key}`);

export const clearLS = () =>
  Object.values(LS_KEYS).forEach((key: string) => removeLSValue(key));
