import { URLS } from '@constants/urls';
import api from '@helpers/api';

export const getUsersActions = async () => {
  return await api
    .get(URLS.DEVICES)
    .then((data) => {
      return data?.data;
    })
    .catch((errors) => {
      return errors.response.data;
    });
};
