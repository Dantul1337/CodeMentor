import { useState } from 'react';
import { createApplication } from '../../services/courseApi';

const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage('');
    setErrorMessage('');

    setIsSubmitting(true);

    try {
      await createApplication({
        name,
        email,
        phone,
      });

      setSuccessMessage('Заявка успешно отправлена!');

      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error(error);

      setErrorMessage('Не удалось отправить заявку.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <h2>Записаться на курс</h2>

      <input
        className="application-form__input"
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="application-form__input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="application-form__input"
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button className="application-form__button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
      </button>

      {successMessage && <p className="application-form__success">{successMessage}</p>}

      {errorMessage && <p className="application-form__error">{errorMessage}</p>}
    </form>
  );
};

export default ApplicationForm;
