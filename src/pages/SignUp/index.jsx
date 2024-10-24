import { useState } from 'react';

import { SIGNUP_FIELDS } from '../../constants';
import AuthForm from '../../components/AuthForm';

function SignUp() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    console.log('Formulário enviado:', formData);

    setFormData({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    setErrorMessage('');
  }

  return (
    <AuthForm
      actionLink='/auth/signin'
      actionText='Já possui conta?'
      linkText='Entrar'
      fields={SIGNUP_FIELDS}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText='Cadastrar'
      errorMessage={errorMessage}
      formData={formData}
      title='Cadastrar'
    />
  );
}

export default SignUp;
