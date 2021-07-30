import React from 'react';
import PropTypes from 'prop-types';
import s from './Alert.module.css';

export default function Alert({ message }) {
  return (
    <div className={s.alertWrapper}>
      <p>{message}</p>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
};
