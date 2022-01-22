import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PAGES } from '@constants/pages';
import { isLoggedIn } from '@utils';

import Generic from './Generic';

const Private: FC = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate(PAGES.HOME);
    }
  }, [navigate]);

  return <Generic>{children}</Generic>;
};

export default Private;
