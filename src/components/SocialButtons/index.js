import React from 'react';

import Button from '../Button';

import styles from './SocialButtons.module.scss';

const info = [
  { text: 'Войти через Facebook', name: 'facebook' },
  { text: 'Войти через Google', name: 'google' },
];
const SocialButtons = ({ className, ...props }) => {
  return (
    <div className={`${styles.socialButtons} ${className}`}>
      {info.map(({ text, name }) => (
        <Button
          key={name}
          className={`${styles[name]}`}
          {...props}
        >
          {text}
        </Button>
      ))}
    </div>
  );
};

export default SocialButtons;
