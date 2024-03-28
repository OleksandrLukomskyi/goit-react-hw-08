
import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';

export const LoginForm = ({ login }) => {


  const handleSubmit = e => {
    e.preventDefault();


    const { email, password } = e.target.elements;
    login({ email: email.value, password: password.value });
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
        <Link to="/register">Registration</Link>
      </form>
    </div>
  );
};
