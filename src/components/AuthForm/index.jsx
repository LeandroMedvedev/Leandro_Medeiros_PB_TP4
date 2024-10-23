import { Link } from 'react-router-dom';

import styles from './style.module.css';

function AuthForm({
  fields,
  actionText,
  actionLink,
  linkText,
  buttonText,
  formData,
  onChange,
  onSubmit,
  errorMessage,
}) {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      {fields.map(({ label, id, name, type, autoComplete }) => (
        <div className={styles.fieldsContainer} key={id}>
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
          <input
            className={styles.input}
            id={id}
            type={type}
            name={name}
            value={formData[name] || ''}
            onChange={onChange}
            autoComplete={autoComplete}
            required
          />
        </div>
      ))}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <button className={styles.button} type='submit'>
        {buttonText}
      </button>
      <p className={styles.paragraph}>
        {actionText}{' '}
        <Link className={styles.link} to={actionLink}>
          {linkText}
        </Link>
      </p>
    </form>
  );
}

export default AuthForm;
