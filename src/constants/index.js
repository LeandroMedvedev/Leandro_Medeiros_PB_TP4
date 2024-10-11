const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const SIGNIN_FIELDS = [
  { label: 'Usuário', id: 'userName', type: 'text', autoComplete: 'username' },
  {
    label: 'Senha',
    id: 'password',
    type: 'password',
    autoComplete: 'current-password',
  },
];

const SIGNUP_FIELDS = [
  {
    label: 'Nome de Usuário',
    id: 'userName',
    type: 'text',
    autoComplete: 'username',
  },
  { label: 'E-mail', id: 'email', type: 'email', autoComplete: 'email' },
  {
    label: 'Senha',
    id: 'password',
    type: 'password',
    autoComplete: 'new-password',
  },
  {
    label: 'Confirmar Senha',
    id: 'confirm-password',
    type: 'password',
    autoComplete: 'new-password',
  },
];

export { IMAGE_BASE_URL, SIGNIN_FIELDS, SIGNUP_FIELDS };
