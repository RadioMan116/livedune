import React from 'react';

import styles from './Button.module.scss';

const Button = ({ type, children, className, ...props }) => {
  return (
    <button
      className={`${styles.button} ${type ? styles[type] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
