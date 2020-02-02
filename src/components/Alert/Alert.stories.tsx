import React from 'react';
import Alert from './Alert';
import { action } from '@storybook/addon-actions';

const Error = () => (
  <Alert
    id="1"
    message="Error message"
    handleClose={action('handleClose()')}
    type="error"
  />
);

const Success = () => (
  <Alert
    id="2"
    message="Success message"
    handleClose={action('handleClose()')}
    type="success"
  />
);

const Primary = () => (
  <Alert
    id="3"
    message="Information Message"
    handleClose={action('handleClose()')}
    type="primary"
  />
);

export const alerts = () => (
  <>
    <Error />
    <Success />
    <Primary />
  </>
);

export default {
  component: alerts,
  title: 'Alert',
};
