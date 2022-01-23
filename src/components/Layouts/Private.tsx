import { FC, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import { PAGES } from '@constants/pages';
import { isLoggedIn } from '@utils';

import { Button, BUTTON_VARIANT } from '@components';
import { logoutAction } from '@actions/auth';

const Private: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate(PAGES.HOME);
    }
  }, [navigate]);

  const logout = () => {
    logoutAction();
    navigate(PAGES.HOME);
  };

  return (
    <>
      <Outlet />
      <div className="w-full z-50 navigation absolute bottom-0 bg-black/20 p-5">
        <div className="flex justify-center">
          <Button
            variant={BUTTON_VARIANT.LIGHT}
            className="mr-3"
            text={location.pathname === PAGES.NOTIFY ? 'DEVICES' : 'NOTIFY'}
            small="true"
            to={location.pathname === PAGES.NOTIFY ? PAGES.USERS : PAGES.NOTIFY}
          />
          <Button
            onClick={() => logout()}
            variant={BUTTON_VARIANT.DARK}
            text="LOG OUT"
            small="true"
          />
        </div>
      </div>
    </>
  );
};

export default Private;
