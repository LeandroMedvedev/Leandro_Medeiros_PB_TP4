import { SIGNUP_FIELDS } from '../../constants';
import Form from '../Form';

function SignUp() {
  return (
    <Form
      actionLink='/authentication/signin'
      actionText='Já possui conta?'
      linkText='Entrar'
      fields={SIGNUP_FIELDS}
      onSubmit={(e) => e.preventDefault()}
    />
  );
}

export default SignUp;
