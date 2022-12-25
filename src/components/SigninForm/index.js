import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SocialButtons from '../SocialButtons';
import Input from '../Input';
import Button from '../Button';
import { isEmpty, trimValue, writeData } from '../../api/globalFunc';
import { logIn } from '../../api/fetchApi';
import { setLoggedIn } from '../../store/authSlice';

const form = [
  { label: 'Email', value: 'email', type: 'text' },
  { label: 'Пароль', value: 'password', type: 'password' },
];

const errorTxt = ['Введите email, Введите пароль', 'Неверный email или пароль'];
const SigninForm = () => {
  const dispatch = useDispatch();
  const { is_authenticated, name } = useSelector(state => state.auth);

  const navigate = useNavigate();

  const [json, setJson] = useState({
    email: '',
    password: '',
    // email: 'example@example.com',
    // password: 'password2021',
  });
  const [mainState, setMainState] = useState({
    error: '',
    fetch: false,
  });
  const handlerForget = () => {
    navigate('/forget', { replace: true });
  };

  const handlerSend = () => {
    let data = { ...json };
    writeData(setMainState, { fetch: true });

    console.log(data);

    if (isEmpty(data)) {
      writeData(setMainState, { error: errorTxt[0], fetch: false });
      return false;
    } else writeData(setMainState, { error: '' });

    logIn(data)
      .then(res => {
        if (res.status < 400) {
          writeData(setMainState, { error: '', fetch: false });
          writeData(setJson, { email: '', password: '' });
          dispatch(setLoggedIn());
        }
      })
      .catch(err => {
        writeData(setMainState, { error: errorTxt[1], fetch: false });
      });
  };
  if (is_authenticated) {
    return (
      <div className={'welcome'}>
        Добро Пожаловать,<b>{name}</b>
      </div>
    );
  }
  return (
    <div className={`form form__signin ${mainState.fetch ? 'send' : ''}`}>
      <span className={'form__title'}>Войти</span>
      <span className={'form__subtitle'}>
        Добро пожаловать, рады видеть вас снова 👋
      </span>
      <SocialButtons className={'form__social'} />
      <span className={'form__either'}>или</span>
      <div className={`form__inner ${!!mainState.error ? 'error' : ''}`}>
        {form.map(({ value, label, type }) => (
          <Input
            key={value}
            type={type}
            placeholder={label}
            className={'form__input'}
            value={json[value]}
            autoComplete='new-password'
            onChange={e => {
              writeData(setJson, { [value]: e.target.value });
            }}
            onBlur={e => {
              writeData(setJson, { [value]: trimValue(e.target.value) });
            }}
            required
          />
        ))}
        {!!mainState.error && (
          <span className={'form__warning'}>{mainState.error}</span>
        )}
      </div>
      <Button
        type={'main'}
        className={'form__submit'}
        onClick={handlerSend}
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
