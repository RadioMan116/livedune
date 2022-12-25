import React from 'react';

import styles from './Input.module.scss';

const Input = ({ type = 'text', className, value, ...props }) => {
  return (
    <div className={`${styles.input} ${className}`}>
      <input
        type={type}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
