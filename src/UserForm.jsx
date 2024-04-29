import React from 'react';
import { useForm } from 'react-hook-form';
import './UserForm.css';

function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Имя:</label>
      <input type="text" {...register('firstName', { required: true })} />
      {errors.firstName && <p className="error-message">Введите имя</p>}

      <label>Фамилия:</label>
      <input type="text" {...register('lastName', { required: true })} />
      {errors.lastName && <p className="error-message">Введите фамилию</p>}

      <label>Почта:</label>
      <input type="email" {...register('email', { required: true })} />
      {errors.email && <p className="error-message">Введите корректную почту</p>}

      <label>Адрес:</label>
      <input type="text" {...register('address')} />

      <label>Возраст:</label>
      <input type="number" {...register('age', { required: true, min: 18 })} />
      {errors.age && <p className="error-message">Введите корректный возраст (минимум 18 лет)</p>}

      <label>Номер телефона:</label>
      <input type="tel" {...register('phoneNumber', { required: true, pattern: /^\+?[0-9]*$/ })} />
      {errors.phoneNumber && <p className="error-message">Введите корректный номер телефона</p>}

      <button type="submit">Отправить</button>
    </form>
  );
}

export default UserForm;

