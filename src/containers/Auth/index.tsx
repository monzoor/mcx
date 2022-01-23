import { FC } from 'react';

import { Page } from '@components';
import AuthForm from './AuthForm';

const Auth: FC = () => {
  return (
    <Page bg="bg-gray-dark">
      <div className="flex flex-col justify-center bg-white w-1/2 rounded">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 font-thin text-center text-4xl text-gray-900">
            Login
          </h2>
        </div>
        <AuthForm />
      </div>
    </Page>
  );
};

export default Auth;
