import * as React from 'react';
import classNames from 'classnames';
import { X } from 'react-feather';
import { ToastProps } from '../types';
import styled from '@emotion/styled';

const Alert: React.FunctionComponent<ToastProps> = ({
  message,
  type,
  className,
  id,
  handleClose = () => {},
  ...others
}) => {
  const classes = classNames(
    `bg-white font-light relative`,
    `border border-solid border-${type} rounded-md`,
    'block mt-3 mx-auto py-2 px-5',
    className
  );

  const spanClasses = classNames(
    'h-full cursor-pointer',
    'absolute left-0 top-0',
    `bg-${type} color-white`,
    `border border-solid border-${type}`
  );

  const Alert = styled.div`
    transition: all 0.35s;
    max-width: 60%;
    span {
      transition: all 0.35s;
      width: 8px;
      & > * {
        opacity: 0;
        transition: all 0.1s;
      }
    }
    &:hover {
      padding-left: 50px;
      span {
        width: 30px;
        & > * {
          opacity: 1;
          transition: all 0.5s;
        }
      }
    }
  `;
  return (
    <Alert className={classes} {...others}>
      <span className={spanClasses}>
        <X
          className="absolute pos-center"
          color="white"
          onClick={() => handleClose(id)}
        />
      </span>
      {message}
    </Alert>
  );
};

export default Alert;
