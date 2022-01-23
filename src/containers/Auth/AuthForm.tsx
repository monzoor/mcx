import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Input, Button, Form, BUTTON_VARIANT } from '@components';
import { loginAction } from '@actions/auth';
import { FIELDS } from '@constants/fields';
import { getAssetUrl } from '@utils';

const AuthForm: FC = () => {
  const navigate = useNavigate();
  const methods = useForm<TFormData>({ mode: 'onChange' });
  const {
    setError,
    formState: { isDirty, isValid },
  } = methods;

  const onSubmit = (data: TFormData) => {
    loginAction(data, setError, navigate);
  };

  return (
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
                id={FIELDS.AUTH.EMAIL}
                name={FIELDS.AUTH.EMAIL}
                icon={getAssetUrl('/images/envelope-solid.svg')}
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
                id={FIELDS.AUTH.PASSWORD}
                name={FIELDS.AUTH.PASSWORD}
                icon={getAssetUrl('/images/key-solid.svg')}
                validation={{
                  minLength: {
                    value: 3,
                    message: 'Password should be at least 3 character long',
                  },
                }}
              />

              <div className="mx-auto flex">
                <Button
                  variant={BUTTON_VARIANT.BLUE}
                  type="submit"
                  text="Log in"
                  className="mx-auto"
                  disabled={!isDirty || !isValid}
                />
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
