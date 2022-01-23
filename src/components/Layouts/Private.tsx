import { FC, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { PAGES } from '@constants/pages';
import { isLoggedIn } from '@utils';

import PrivateNavigation from '@components/Navigation/PrivateNavigation';

const Private: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate(PAGES.HOME);
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
      <PrivateNavigation />
    </>
  );
};

export default Private;
