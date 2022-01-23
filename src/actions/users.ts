import { URLS } from '@constants/urls';
import api from '@helpers/api';

export const getUsersActions = () => {
  return api
    .get(URLS.DEVICES)
    .then((data) => {
      //   console.log('===', data?.data);
      return data?.data;
    })
    .catch((errors) => {
      console.log('====', errors);
    });
};
