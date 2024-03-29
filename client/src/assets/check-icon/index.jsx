import classNames from 'classnames';
import React from 'react';

// eslint-disable-next-line react/prop-types
export const CheckIcon = ({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(className)}
      {...props}
    >
      <path
        d="M8.79502 15.875L4.62502 11.705L3.20502 13.115L8.79502 18.705L20.795 6.705L19.385 5.295L8.79502 15.875Z"
        fill="currentColor"
      />
    </svg>
  );
};
