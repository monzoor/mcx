import classNames from 'classnames';
import { FC } from 'react';

interface ButtonTypes {
  [others: string]: any;
}

export const BUTTON_VARIANT = {
  BLUE: 'bg-blue text-white',
  LIGHT: 'bg-gray-light text-dark',
  DARK: 'bg-gray-dark text-white',
};
export const Button: FC<ButtonTypes> = (props) => {
  const { text, type, className, small, variant } = props;
  const buttonSize = small ? 'px-5 py-2 text-sm' : 'py-3 px-5 text-base';
  const buttonStyles = classNames(
    'border border-transparent focus:outline-none',
    buttonSize,
    variant,
    {
      [className]: classNames,
    },
  );
  return (
    <>
      <button {...props} type={type || 'button'} className={buttonStyles}>
        {text}
      </button>
    </>
  );
};
