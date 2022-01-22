import { FC } from 'react';

interface ButtonTypes {
  [others: string]: any;
}

const Button: FC<ButtonTypes> = (props) => {
  const { text, type } = props;
  return (
    <>
      <button
        type={type || 'button'}
        className="mt-5 flex justify-center mx-auto py-3 px-5 border border-transparent font-medium text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
