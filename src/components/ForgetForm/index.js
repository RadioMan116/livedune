import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';

const ForgetForm = () => {
  const navigate = useNavigate();

  const handlerReturn = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={'form form__signin form__forget'}>
      <div className={'form__picture'}>
        <img
          src='./lock.png'
          alt='lock'
        />
      </div>
      <span className={'form__caption'}>Восстановить пароль</span>
      <span className={'form__subtitle'}>
        Введите e-mail, на который регистрировались ранее
      </span>

      <div className={'form__inner'}>
        <Input
          type={'email'}
          placeholder={'Email'}
          name={'email'}
          className={'form__input'}
        />
      </div>
      <Button
        type={'main'}
        className={'form__submit'}
      >
        Отправить
      </Button>
      <Button
        type={'link'}
        className={'form__forget'}
        onClick={handlerReturn}
      >
        Отменить
      </Button>
    </div>
  );
};

export default ForgetForm;
