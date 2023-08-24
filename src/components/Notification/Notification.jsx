import React from 'react';
import PropTypes from 'prop-types';
import { NotificMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificMessage>{message}</NotificMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};