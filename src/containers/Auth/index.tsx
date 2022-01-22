import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Page, Input, Button, Form } from '@components';
import { loginAction } from '@actions/auth';
import { FIELDS } from '@constants/fields';

interface FormData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const navigate = useNavigate();
  const methods = useForm<FormData>({ mode: 'onChange' });
  const { setError } = methods;

  const onSubmit = (data: any) => {
    loginAction(data, setError, navigate);
  };

  return (
    <Page bg="bg-gray-dark">
      <div className="flex flex-col justify-center bg-white w-1/2 rounded">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 font-thin text-center text-4xl text-gray-900">
            Login
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4">
            <Form className="space-y-1" methods={methods} onSubmit={onSubmit}>
              {(props: any) => (
                <>
                  <Input
                    {...props}
                    component="input"
                    type="email"
                    label="Email address"
                    placeholder="Email Address"
                    required
                    id="email"
                    name={FIELDS.AUTH.EMAIL}
                    validation={{
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'invalid email address',
                      },
                    }}
                  />
                  <Input
                    {...props}
                    component="input"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    required
                    id="password"
                    name={FIELDS.AUTH.PASSWORD}
                  />

                  <div>
                    <Button type="submit" text="Log in" />
                  </div>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Auth;
