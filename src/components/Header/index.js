import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import { writeData } from '../../api/globalFunc';
import { setLoggedOut } from '../../store/authSlice';

import styles from './Header.module.scss';

const Header = () => {
  const { is_authenticated } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [buttonsState, setButtonsState] = useState({
    signup: false,
    visible: true,
  });

  const { signup, visible } = buttonsState;
  const changeSing = () => {
    if (pathname === '/') {
      navigate('/signup', { replace: true });
    } else {
      navigate('/', { replace: true });
    }
  };

  const logOut = () => {
    dispatch(setLoggedOut());
    if (pathname !== '/') navigate('/', { replace: true });
  };

  useEffect(() => {
    const defPath = pathname === '/';
    const upPath = pathname === '/signup';
    if (upPath) {
      writeData(setButtonsState, { signup: true });
    } else if (defPath && signup) {
      writeData(setButtonsState, { signup: false });
    }
    if ((upPath || defPath) && !visible) {
      writeData(setButtonsState, { visible: true });
    } else if (!(upPath || defPath)) {
      writeData(setButtonsState, { visible: false });
    }
  }, [pathname]);

  return (
    <header className={`${styles.header} `}>
      <div className={`container ${styles.header__container}`}>
        <Button
          className={styles.header__logo}
          onClick={() => navigate('/', { replace: true })}
        >
          <img
            src={'/logo.svg'}
            alt='logo'
          />
        </Button>

        {visible && !is_authenticated && (
          <div className={styles.header__info}>
            <span className={styles.header__question}>
              {signup ? 'Уже есть аккаунт?' : 'У вас нет аккаунта?'}
            </span>
            <Button
              className={styles.header__btn}
              type={'main'}
              onClick={changeSing}
            >
              {signup ? 'Войти' : 'Регистрация'}
            </Button>
          </div>
        )}

        {is_authenticated && (
          <div className={styles.header__info}>
            <Button
              className={styles.header__logOut}
              onClick={logOut}
            >
              Выйти
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
