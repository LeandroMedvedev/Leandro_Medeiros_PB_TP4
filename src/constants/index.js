import axios from 'axios';

const API_WATCHLIST_URL = process.env.REACT_APP_TMDB_API_WATCHLIST_URL;
const API_FAVORITE_URL = process.env.REACT_APP_TMDB_API_FAVORITES_URL;
const API_DETAILS_URL = process.env.REACT_APP_TMDB_API_DETAILS_URL;
const API_POPULAR_URL = process.env.REACT_APP_TMDB_API_POPULAR_URL;
const API_BASE_URL = process.env.REACT_APP_TMDB_API_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
const ACCOUNT_ID = process.env.REACT_APP_TMDB_ACCOUNT_ID;
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const SIGNIN_FIELDS = [
  {
    label: 'Usuário',
    id: 'username',
    name: 'username',
    type: 'text',
    autoComplete: 'username',
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
    id: 'username',
    name: 'username',
    type: 'text',
    autoComplete: 'username',
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
    id: 'username',
    name: 'username',
    type: 'text',
    autoComplete: 'username',
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

const MOVIE_CATEGORIES = [
  {
    category: 'Em exibição',
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1',
  },
  {
    category: 'Populares',
    url: 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1',
  },
  {
    category: 'Mais votados',
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1',
  },
  {
    category: 'Lançamentos',
    url: 'https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=1',
  },
];

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
});

export {
  API_WATCHLIST_URL,
  MOVIE_CATEGORIES,
  API_FAVORITE_URL,
  API_DETAILS_URL,
  API_POPULAR_URL,
  IMAGE_BASE_URL,
  PROFILE_FIELDS,
  SIGNIN_FIELDS,
  SIGNUP_FIELDS,
  ACCESS_TOKEN,
  API_BASE_URL,
  ACCOUNT_ID,
  API_KEY,
  API,
};
