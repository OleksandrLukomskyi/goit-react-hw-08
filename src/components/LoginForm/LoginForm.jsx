
import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import { logIn } from '../../store/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch()



  const handleSubmit = e => {
    e.preventDefault();


    const { email, password } = e.target.elements;
    dispatch(
      logIn({ email: email.value, password: password.value })
      )
      .unwrap()
      .then(() => {console.log('login success')})
      .catch(() => {console.log('login error')})

      
    e.target.reset();

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
