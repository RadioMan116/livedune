import React from 'react';

import styles from './Input.module.scss';

const Input = ({ type = 'text', name, className, ...props }) => {
  return (
    <div className={`${styles.input} ${className}`}>
      <input
        type={type}
        {...props}
      />
    </div>
  );
};

export default Input;
