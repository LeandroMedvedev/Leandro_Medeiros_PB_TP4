import { SIGNIN_FIELDS } from '../../constants';
import Form from '../Form';

function SignIn() {
  return (
    <Form
      actionLink='/authentication/signup'
      actionText='Ainda não possui conta?'
      linkText='Cadastre-se'
      fields={SIGNIN_FIELDS}
      onSubmit={(e) => e.preventDefault()}
    />
  );
}

export default SignIn;
