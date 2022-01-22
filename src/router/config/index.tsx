import type { RouteObject } from 'react-router-dom';

import Public from '@components/Layouts/Public';
import Private from '@components/Layouts/Private';

import Auth from '@containers/Auth';
import User from '@containers/User';

let routes: RouteObject[] = [
  {
    path: '/',
    element: <Public />,
    children: [
      { index: true, element: <Auth /> },
      {
        path: '/user',
        element: <Private />,
        children: [{ index: true, element: <User /> }],
      },
    ],
  },
];

export default routes;
