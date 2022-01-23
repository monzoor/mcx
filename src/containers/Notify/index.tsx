import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, BUTTON_VARIANT, Form, Input, Page } from '@components';
import { FIELDS } from '@constants/fields';
import { notifyAction } from '@actions/notify';

const Notify = () => {
  const [success, setSuccess] = useState<string>('');

  const methods = useForm<FormData>({ mode: 'onChange' });
  const { setError } = methods;

  const onSubmit = (data: any) => {
    notifyAction(data, setError).then((data) => {
      setSuccess(data);
    });
  };

  return (
    <Page bg="bg-orange">
      <div className="bg-white rounded p-5 w-2/3">
        <p className="text-4xl text-gray-dark">Notify</p>
        {success !== '' ? (
          <h1 className="mt-8 text-5xl text-green-500">{success}</h1>
        ) : (
          <Form
            className="space-y-1 mt-8"
            methods={methods}
            onSubmit={onSubmit}
          >
            {(props: any) => (
              <>
                <Input
                  {...props}
                  component="input"
                  type="text"
                  label="Name"
                  placeholder="Name"
                  required
                  id={FIELDS.NOTIFY.NAME}
                  name={FIELDS.NOTIFY.NAME}
                />

                <Input
                  {...props}
                  component="input"
                  type="email"
                  label="Email address"
                  placeholder="Email Address"
                  required
                  id={FIELDS.NOTIFY.EMAIL}
                  name={FIELDS.NOTIFY.EMAIL}
                  validation={{
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  }}
                />

                <Input
                  {...props}
                  component="input"
                  type="text"
                  label="Repo URL"
                  placeholder="Repo URL"
                  required
                  id={FIELDS.NOTIFY.REPO_URL}
                  name={FIELDS.NOTIFY.REPO_URL}
                  validation={{
                    pattern: {
                      value:
                        /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
                      message: 'Invalid url',
                    },
                  }}
                />

                <Input
                  {...props}
                  component="textarea"
                  type="text"
                  label="Message"
                  placeholder="Message"
                  required
                  id={FIELDS.NOTIFY.MESSAGE}
                  name={FIELDS.NOTIFY.MESSAGE}
                />

                <div className="mx-auto flex">
                  <Button
                    variant={BUTTON_VARIANT.BLUE}
                    type="submit"
                    text="Submit"
                    className="mx-auto"
                  />
                </div>
              </>
            )}
          </Form>
        )}
      </div>
    </Page>
  );
};

export default Notify;
