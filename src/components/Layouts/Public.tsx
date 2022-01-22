import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { isLoggedIn } from '@utils';

import Generic from './Generic';
import { PAGES } from '@constants/pages';
const Public: FC = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(PAGES.USERS);
    }
  }, [navigate]);

  return <Generic>{children}</Generic>;
};

export default Public;
