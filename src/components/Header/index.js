import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../Button';
import { writeDate } from '../../api/globalFunc';

import styles from './Header.module.scss';

const Header = ({}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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

  useEffect(() => {
    const defPath = pathname === '/';
    const upPath = pathname === '/signup';
    if (upPath) {
      writeDate(setButtonsState, 'signup', true);
    } else if (defPath && signup) {
      writeDate(setButtonsState, 'signup', false);
    }
    if ((upPath || defPath) && !visible) {
      writeDate(setButtonsState, 'visible', true);
    } else if (!(upPath || defPath)) {
      writeDate(setButtonsState, 'visible', false);
    }
  }, [pathname]);

  return (
    <header className={`${styles.header} `}>
      <div className={`container ${styles.header__container}`}>
        <Button className={styles.header__logo}>
          <img
            src={'/logo.svg'}
            alt='logo'
          />
        </Button>

        {visible && (
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
      </div>
    </header>
  );
};

export default Header;
