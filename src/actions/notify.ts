import { FIELDS } from '@constants/fields';
import { URLS } from '@constants/urls';
import api from '@helpers/api';

export const notifyAction = (data: any, setError: any) => {
  return api
    .post(URLS.NOTIFY, data)
    .then((data) => {
      return data?.data;
    })
    .catch(() => {
      setError(FIELDS.NOTIFY.MESSAGE, {
        message: 'Something went wrong. Please login again',
      });
    });
};
