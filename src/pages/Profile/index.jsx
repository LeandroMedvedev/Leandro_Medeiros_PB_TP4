import { useState } from 'react';

import { AuthForm } from '../../components';
import { PROFILE_FIELDS } from '../../constants';

function Profile() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // const { userName, email, password } = formData;
    // console.log(userName);
    // console.log(email);
    // console.log(password);

    setFormData({
      userName: '',
      email: '',
      password: '',
    });
    setErrorMessage('');
  }

  return (
    <AuthForm
      fields={PROFILE_FIELDS}
      onChange={handleChange}
      onSubmit={handleSubmit}
      buttonText='Salvar'
      errorMessage={errorMessage}
      formData={formData}
      title='Perfil do Usuário'
    />
  );
}

export default Profile;
