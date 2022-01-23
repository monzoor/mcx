import { FC, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { isLoggedIn } from '@utils';

import { PAGES } from '@constants/pages';
const Public: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(PAGES.USERS);
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Public;
