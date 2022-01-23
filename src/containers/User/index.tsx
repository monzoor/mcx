import { FC, useEffect, useState } from 'react';

import { Page } from '@components';

import './test.css';
import { getUsersActions } from '@actions/users';

function ComponentForLoop(users: number) {
  const rows = [];
  const degree = 380 / users;
  for (let i = 0; i < users; i++) {
    rows.push(
      <li
        key={i}
        style={{
          transform: `rotate(${i * degree}deg) translate(12.5em) rotate(-${
            i * degree
          }deg)`,
        }}
      >
        <div className="orbit-icon" />
      </li>,
    );
  }

  return <>{rows}</>;
}

const User: FC = () => {
  const [users, setUsers] = useState<any>(0);

  useEffect(() => {
    getUsersActions().then(({ devices }) => {
      setUsers(devices.length);
    });
  }, []);

  useEffect(() => {
    const deviceFetch = setInterval(() => {
      getUsersActions().then(({ devices }) => {
        setUsers(devices.length);
      });
    }, 5000);
    return () => {
      clearInterval(deviceFetch);
    };
  }, []);

  return (
    <Page bg="bg-orange">
      <div className="orbit">
        <ul className="orbit-wrap">
          <li className="orbit-center">
            <div className="orbit-center__icon text-center">
              <p className="text-8xl font-light text-white">{users}</p>
              <p className="text-center text-white text-lg">
                DEVICES <br />
                ONLINE
              </p>
            </div>
          </li>

          <li>
            <ul className="ring-0">{ComponentForLoop(users)}</ul>
          </li>
        </ul>
      </div>
    </Page>
  );
};

export default User;
