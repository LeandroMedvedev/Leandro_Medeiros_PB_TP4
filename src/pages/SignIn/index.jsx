import { useState } from 'react';
import { Button, CircularProgress, TextField, Typography } from '@mui/material';

import { useAuthContext } from '../../contexts';

function SignIn() {
  const [username, setUsername] = useState('LeandroMedvedev');
  const [password, setPassword] = useState('');

  const { error, loading, signIn } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(username, password);

    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant='h4' style={{ marginBottom: '1rem' }}>
        Entrar
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <TextField
          label='Usuário'
          variant='standard'
          autoComplete='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          sx={{
            '& .MuiInput-underline:before': {
              borderBottomColor: '#fff',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: '#fff',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#ffd700',
            },
            '& .MuiInputLabel-root': { color: '#fff' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#ffd700' },
            '& .MuiInputBase-input': { color: '#fff' },
          }}
        />
        <TextField
          label='Senha'
          type='password'
          variant='standard'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          sx={{
            '& .MuiInput-underline:before': {
              borderBottomColor: '#fff',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: '#fff',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#ffd700',
            },
            '& .MuiInputLabel-root': { color: '#fff' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#ffd700' },
            '& .MuiInputBase-input': { color: '#fff' },
          }}
        />

        <Button
          type='submit'
          variant='contained'
          sx={{
            color: '#fff',
            bgcolor: '#ffd700',
            borderRadius: 1,
            height: 56,
            fontFamily: 'Ubuntu',
            fontSize: 20,
          }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Enviar'}
        </Button>
      </form>

      {error && (
        <Typography color='error' style={{ marginTop: '1rem' }}>
          {error}
        </Typography>
      )}
    </div>
  );
}

export default SignIn;
