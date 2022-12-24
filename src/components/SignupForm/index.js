import React from 'react';

import SocialButtons from '../SocialButtons';
import Input from '../Input';
import Button from '../Button';

const form = [
  { label: 'Имя', value: 'name' },
  { label: 'Email', value: 'email' },
  { label: 'Пароль', value: 'password' },
];
const Signup = () => {
  return (
    <div className={'form form__signin'}>
      <span className={'form__title'}>Регистрация</span>
      <span className={'form__subtitle'}>
        Зарегистрируйся и получи доступ к аналитике аккаунтов.
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
        type={'link'}
        className={'form__promo'}
      >
        У меня есть промокод
      </Button>
      <Button
        type={'main'}
        className={'form__submit'}
      >
        Создать аккаунт
      </Button>

      <span className={'form__oferta'}>
        Создавая аккаунт, я согласен с&nbsp;
        <Button type={'link'}>условиями оферты</Button>
      </span>
    </div>
  );
};

export default Signup;
