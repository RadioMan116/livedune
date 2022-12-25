import Button from '../Button';

const SuccessfulTxt = ({ navigate, reject }) => {
  const handlerReturn = () => {
    navigate('/', { replace: true });
  };
  return (
    <div className={'form form__success'}>
      <span className={'form__title'}>Подтвердите ваш e-mail</span>
      <span className={'form__subtitle'}>
        Игорь, на ваш E-mail отправлено письмо со ссылкой для подтверждения.
        Перейдите по ней, чтобы активировать вашу учетную запись и получить 7
        дней бесплатного доступа.{' '}
      </span>
      <Button
        type={'main'}
        className={'form__submit'}
        onClick={handlerReturn}
      >
        Перейти к почте
      </Button>
      <Button
        type={'link'}
        className={'form__forget'}
        onClick={reject}
      >
        Мне не пришло письмо
      </Button>
    </div>
  );
};

export default SuccessfulTxt;
