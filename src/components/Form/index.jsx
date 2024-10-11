import { Link } from 'react-router-dom';

import styles from './style.module.css';

function Form({ fields, actionText, actionLink, linkText, onSubmit }) {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      {fields.map(({ label, id, inputType, autoComplete }) => (
        <div className={styles.fieldsContainer} key={id}>
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
          <input
            className={styles.input}
            id={id}
            type={inputType}
            autoComplete={autoComplete}
          />
        </div>
      ))}
      <p className={styles.paragraph}>
        {actionText}{' '}
        <Link className={styles.link} to={actionLink}>
          {linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;
