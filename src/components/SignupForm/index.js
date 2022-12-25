import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SocialButtons from '../SocialButtons';
import Input from '../Input';
import Button from '../Button';
import {
  isEmpty,
  isValidEmail,
  trimValue,
  writeData,
} from '../../api/globalFunc';

import SuccessfulTxt from './SuccessfulTxt';
import RejectForm from './RejectForm';

const errorTxt = [
  'Возможно вы ошиблись в указании почтового сервиса',
  'Заполните обязательные поля',
];

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState([
    { label: 'Имя', value: 'name', type: 'text' },
    { label: 'Email', value: 'email', type: 'text' },
    { label: 'Пароль', value: 'password', type: 'password' },
  ]);

  const [json, setJson] = useState({
    name: '',
    email: '',
    password: '',
    promo: '',
  });

  const [mainState, setMainState] = useState({
    error: false,
    errorMail: false,
    step: 0,
    fetch: false,
  });

  const addPromo = () => {
    setForm(prevState => [...prevState, { label: 'Промокод', value: 'promo' }]);
  };

  const handlerSend = () => {
    let data = { ...json };
    let requiredData = (({ promo, ...o }) => o)(data);
    if (mainState.errorMail) return false;

    writeData(setMainState, { fetch: true });

    if (isEmpty(requiredData)) {
      writeData(setMainState, { error: true, fetch: false });
      return false;
    } else writeData(setMainState, { error: false });
    setTimeout(() => {
      writeData(setMainState, { step: 1, fetch: false });
      writeData(setJson, { name: '', email: '', password: '', promo: '' });
    }, 800);
  };

  if (mainState.step === 1) {
    return (
      <SuccessfulTxt
        navigate={navigate}
        reject={() => writeData(setMainState, { step: 2 })}
      />
    );
  } else if (mainState.step === 2) {
    return (
      <RejectForm handlerCancel={() => writeData(setMainState, { step: 0 })} />
    );
  } else {
    return (
      <div className={`form form__signin ${mainState.fetch ? 'send' : ''}`}>
        <span className={'form__title'}>Регистрация</span>
        <span className={'form__subtitle'}>
          Зарегистрируйся и получи доступ к аналитике аккаунтов.
        </span>
        <SocialButtons className={'form__social'} />
        <span className={'form__either'}>или</span>
        <div className={`form__inner  ${mainState.error ? 'error' : ''}`}>
          {form.map(({ value, label, type }) => (
            <Fragment key={value}>
              <Input
                type={type}
                placeholder={label}
                className={`form__input ${
                  value === 'email' && mainState.errorMail ? 'error' : ''
                }`}
                value={json[value]}
                autoComplete='new-password'
                required={value !== 'promo'}
                onChange={e => {
                  writeData(setJson, { [value]: e.target.value });
                }}
                onBlur={e => {
                  writeData(setJson, { [value]: trimValue(e.target.value) });
                  if (value === 'email' && e.target.value.length) {
                    if (isValidEmail(e.target.value)) {
                      writeData(setMainState, { errorMail: false });
                    } else {
                      writeData(setMainState, { errorMail: true });
                    }
                  }
                }}
              />
              {value === 'email' && mainState.errorMail && (
                <span className={'form__input-error'}>{errorTxt[0]}</span>
              )}
            </Fragment>
          ))}
          {mainState.error && (
            <span className={'form__warning'}>{errorTxt[1]}</span>
          )}
        </div>

        {form.length <= 3 && (
          <Button
            type={'link'}
            className={'form__promo'}
            onClick={addPromo}
          >
            У меня есть промокод
          </Button>
        )}
        <Button
          type={'main'}
          className={'form__submit'}
          onClick={handlerSend}
        >
          Создать аккаунт
        </Button>

        <span className={'form__oferta'}>
          Создавая аккаунт, я согласен с&nbsp;
          <Button type={'link'}>условиями оферты</Button>
        </span>
      </div>
    );
  }
};

export default Signup;
