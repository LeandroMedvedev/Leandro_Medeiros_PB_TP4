import { useState } from 'react';

import { SIGNIN_FIELDS } from '../../constants';
import { AuthForm } from '../../components';
import getRequestTokenService from '../../services/getRequestTokenService';
import redirectToAuthorizationService from '../../services/redirectToAuthorizationService';

function SignIn() {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const requestToken = await getRequestTokenService();

    if (!requestToken) {
      setErrorMessage('Erro ao gerar token de autenticação.');
      return;
    }

    redirectToAuthorizationService(requestToken);

    setFormData({
      userName: '',
      password: '',
    });
  }

  return (
    <AuthForm
      actionLink='/auth/signup'
      actionText='Ainda não possui conta?'
      linkText='Cadastre-se'
      fields={SIGNIN_FIELDS}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText='Entrar'
      errorMessage={errorMessage}
      formData={formData}
      title='Entrar'
    />
  );
}

export default SignIn;
