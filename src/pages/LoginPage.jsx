import { LoginForm } from '../components/LoginForm/LoginForm';

import { useDispatch } from 'react-redux';

import { logIn } from '../store/auth/operations';
import { DocumentTitle } from '../components/DocumentTitle';

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = body => {
    dispatch(logIn(body));
  };

  return (<div>
    <DocumentTitle>Login</DocumentTitle>
    <LoginForm login={login} />
    </div>)
};

export default LoginPage;
