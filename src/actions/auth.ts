import { FIELDS } from '@constants/fields';
import { PAGES } from '@constants/pages';
import { URLS } from '@constants/urls';
import api, { setAuthorization } from '@helpers/api';
import { clearLS } from '@utils/storage';

export const loginAction = (data: TFormData, setError: any, navigate: any) => {
  api
    .post(URLS.LOGIN, data)
    .then((data) => {
      setAuthorization(data?.data);
      navigate(PAGES.USERS);
    })
    .catch((errors) => {
      setError(FIELDS.AUTH.PASSWORD, {
        message: errors.response.data,
      });
    });
};

export const logoutAction = () => {
  clearLS();
};
