import type { RouteObject } from 'react-router-dom';

import { PAGES } from '@constants/pages';

import Public from '@components/Layouts/Public';
import Private from '@components/Layouts/Private';

import Auth from '@containers/Auth';
import User from '@containers/User';
import Notify from '@containers/Notify';
import NotFound from '@containers/NotFound';

let routes: RouteObject[] = [
  {
    path: PAGES.HOME,
    element: <Public />,
    children: [{ index: true, element: <Auth /> }],
  },
  {
    path: PAGES.USERS,
    element: <Private />,
    children: [{ index: true, element: <User /> }],
  },
  {
    path: PAGES.NOTIFY,
    element: <Private />,
    children: [{ index: true, element: <Notify /> }],
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
