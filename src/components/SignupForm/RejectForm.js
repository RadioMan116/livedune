import Button from '../Button';
import Input from '../Input';

const rejectForm = ({ handlerCancel }) => {
  return (
    <div className={'form form__success'}>
      <span className={'form__title'}>Мне не пришло письмо</span>
      <span className={'form__subtitle'}>
        Письмо может прийти с&nbsp;задержкой в&nbsp;5-10&nbsp;минут. Также
        проверьте разные папки почтового ящика (актуально для gmail.com)
        и&nbsp;папку &quot;Спам&quot;.Если письмо все&nbsp;же не&nbsp;пришло,
        повторите попытку или напишите об&nbsp;этом в тех.поддержку
        <a href='mailto:support@livedune.ru '>support@livedune.ru</a> и мы
        активируем ваш аккаунт.
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
        Отправить заново
      </Button>
      <Button
        type={'link'}
        className={'form__forget'}
        onClick={handlerCancel}
      >
        Отменить
      </Button>
    </div>
  );
};

export default rejectForm;
