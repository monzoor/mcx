import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const Generic: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Generic;
