import { LS_KEYS } from '@constants';
import { getLSValue } from './storage';

// @ts-ignore
export const performResponseData = (data: any) => {
  if (!data) {
    return data;
  }

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => performResponseData(item));
  }

  if (typeof data === 'object') {
    const res: any = {};

    Object.keys(data).forEach((key: any) => {
      res[key] = performResponseData(data[key]);
    });

    return res;
  }

  return data;
};

export const isLoggedIn = () => !!getLSValue(LS_KEYS.AUTH);

export const getAssetUrl = (name: string) =>
  `${process.env.PUBLIC_URL}/assets/${name}`;
