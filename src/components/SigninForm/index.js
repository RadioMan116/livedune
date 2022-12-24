import React from 'react';
import { useNavigate } from 'react-router-dom';

import SocialButtons from '../SocialButtons';
import Input from '../Input';
import Button from '../Button';

const form = [
  { label: 'Email', value: 'email' },
  { label: 'Пароль', value: 'password' },
];
const SigninForm = () => {
  const navigate = useNavigate();
  const handlerForget = () => {
    navigate('/forget', { replace: true });
  };
  return (
    <div className={'form form__signin'}>
      <span className={'form__title'}>Войти</span>
      <span className={'form__subtitle'}>
        Добро пожаловать, рады видеть вас снова 👋
      </span>
      <SocialButtons className={'form__social'} />
      <span className={'form__either'}>или</span>
      <div className={'form__inner'}>
        {form.map(({ value, label }) => (
          <Input
            key={value}
            type={value}
            placeholder={label}
            name={value}
            className={'form__input'}
          />
        ))}
      </div>
      <Button
        type={'main'}
        className={'form__submit'}
      >
        Войти в аккаунт
      </Button>
      <Button
        type={'link'}
        className={'form__forget'}
        onClick={handlerForget}
      >
        Забыли пароль?
      </Button>
    </div>
  );
};

export default SigninForm;
