import { FC } from 'react';

import { Link, Outlet } from 'react-router-dom';

const Generic: FC = () => {
  return (
    <>
      this is generic
      <br />
      <Link to="/" className="text-red-500">
        Home
      </Link>
      <Link to="/user">User</Link>
      <Outlet />
    </>
  );
};

export default Generic;
