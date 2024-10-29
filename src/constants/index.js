const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_BASE_URL = process.env.REACT_APP_TMDB_API_BASE_URL;
const API_DETAILS_URL = process.env.REACT_APP_TMDB_API_DETAILS_URL;
const API_POPULAR_URL = process.env.REACT_APP_TMDB_API_POPULAR_URL;
const API_FAVORITE_URL = process.env.REACT_APP_TMDB_API_FAVORITES_URL;
const API_WATCHLIST_URL = process.env.REACT_APP_TMDB_API_WATCHLIST_URL;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const SIGNIN_FIELDS = [
  {
    label: 'Usuário',
    id: 'userName',
    name: 'userName',
    type: 'text',
    autoComplete: 'userName',
  },
  {
    label: 'Senha',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
  },
];

const SIGNUP_FIELDS = [
  {
    label: 'Usuário',
    id: 'userName',
    name: 'userName',
    type: 'text',
    autoComplete: 'userName',
  },
  {
    label: 'E-mail',
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
  },
  {
    label: 'Senha',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'new-password',
  },
  {
    label: 'Confirmar Senha',
    id: 'confirmPassword',
    name: 'confirmPassword',
    type: 'password',
    autoComplete: 'new-password',
  },
];

const PROFILE_FIELDS = [
  {
    label: 'Usuário',
    id: 'userName',
    name: 'userName',
    type: 'text',
    autoComplete: 'userName',
  },
  {
    label: 'E-mail',
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
  },
  {
    label: 'Senha',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'new-password',
  },
];

export {
  API_KEY,
  ACCESS_TOKEN,
  API_BASE_URL,
  API_DETAILS_URL,
  API_FAVORITE_URL,
  API_POPULAR_URL,
  API_WATCHLIST_URL,
  IMAGE_BASE_URL,
  PROFILE_FIELDS,
  SIGNIN_FIELDS,
  SIGNUP_FIELDS,
};
