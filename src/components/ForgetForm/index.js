import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';
import { isEmpty, trimValue, writeData } from '../../api/globalFunc';
import { restorePass } from '../../api/fetchApi';

const errorTxt = ['Введите email', 'Неверный email'];
const ForgetForm = () => {
  const navigate = useNavigate();

  const [json, setJson] = useState({
    email: '',
    // email: 'example@example.com',
  });

  const [mainState, setMainState] = useState({
    error: 0,
    fetch: false,
    step: 0,
  });

  const handlerReturn = () => {
    navigate('/', { replace: true });
  };

  const handlerSend = () => {
    let data = { ...json };
    writeData(setMainState, { fetch: true });

    if (isEmpty(data)) {
      writeData(setMainState, { error: 1, fetch: false });
      return false;
    } else writeData(setMainState, { error: 0 });

    restorePass(data)
      .then(res => {
        if (res.status < 400) {
          writeData(setMainState, { fetch: false, error: 0, step: 1 });
        }
      })
      .catch(err => {
        writeData(setMainState, { fetch: false, error: 2 });
      });
  };

  const stepOne = (
    <>
      <div className={'form__picture'}>
        <img
          src='./lock.png'
          alt='lock'
        />
      </div>
      <span className={'form__caption'}>Восстановить пароль</span>
      <span className={'form__subtitle'}>
        Введите e-mail, на который регистрировались&nbsp;ранее
      </span>

      <div className={`form__inner ${mainState.error !== 0 ? 'error' : ''}`}>
        <Input
          type={'text'}
          placeholder={'Email'}
          name={'email'}
          className={'form__input'}
          value={json.email}
          onChange={e => {
            writeData(setJson, { email: e.target.value });
          }}
          onBlur={e => {
            writeData(setJson, { email: trimValue(e.target.value) });
          }}
          required
        />
        {!!mainState.error && (
          <span className={'form__warning'}>
            {mainState.error === 1 && errorTxt[0]}
            {mainState.error === 2 && errorTxt[1]}
          </span>
        )}
      </div>

      <Button
        type={'main'}
        className={'form__submit'}
        onClick={handlerSend}
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
    </>
  );

  const stepDone = (
    <>
      <div className={'form__picture'}>
        <img
          src='./emoji.png'
          alt='lock'
        />
      </div>
      <span className={'form__caption'}>Письмо отправлено</span>
      <span className={'form__subtitle'}>
        На указанный вами e-mail было отправлено письмо для смены пароля
      </span>

      <Button
        type={'main'}
        className={'form__submit'}
        onClick={handlerReturn}
      >
        Вернуться на главную
      </Button>
    </>
  );

  return (
    <div
      className={`form form__signin form__forget ${
        mainState.fetch ? 'send' : ''
      }`}
    >
      {mainState.step === 0 && stepOne}
      {mainState.step === 1 && stepDone}
    </div>
  );
};

export default ForgetForm;
