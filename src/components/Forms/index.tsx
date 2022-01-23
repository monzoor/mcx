import { FC, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { ErrorMessage } from '@hookform/error-message';

interface InputFields {
  [item: string]: any;
}

const Fields: FC<InputFields> = forwardRef(
  (
    {
      component,
      id = '',
      type,
      name,
      placeholder,
      label,
      noMarginTop,

      required,
      value,
      validation = {},
      icon,
      ...props
    },
    ref,
  ) => {
    const Wrapper = component;
    const { register } = useFormContext();
    const errors = props.formState?.errors;

    const inputClassNames = classNames(
      'appearance-none rounded relative block w-full p-3 bg-gray-light placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
      { 'h-36': component === 'textarea' },
      { 'h-10': component !== 'textarea' },
      { 'pl-10': icon },
      { 'pl-3': !icon },
    );
    const validations = required
      ? {
          required: 'This is required',
          ...validation,
        }
      : { ...validation };

    return (
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        <label htmlFor={id} className="sr-only">
          {label}
          {required && <sup className="text-red-500">*</sup>}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={icon} className="h-5 w-5 z-50" alt="" />
            </div>
          )}

          <Wrapper
            id={id}
            type={type}
            className={inputClassNames}
            placeholder={placeholder}
            defaultValue={value}
            {...register(name, validations)}
          />
        </div>

        {errors && (
          <span className="text-xs text-red-500 block capitalize text-left mb-2">
            <ErrorMessage errors={errors} name={name} />
          </span>
        )}
      </div>
    );
  },
);

export default Fields;
