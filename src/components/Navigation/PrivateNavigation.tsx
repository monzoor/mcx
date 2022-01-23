import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button, BUTTON_VARIANT } from '@components';
import { PAGES } from '@constants/pages';
import { logoutAction } from '@actions/auth';

const PrivateNavigation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    logoutAction();
    navigate(PAGES.HOME);
  };

  return (
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
  );
};

export default PrivateNavigation;
