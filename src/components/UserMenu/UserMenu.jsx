import { useDispatch} from 'react-redux';
import { logOut } from '../../store/auth/operations';
import { useAuth } from '../../hooks';

export const UserMenu = () => {
  
  const dispatch = useDispatch();
  const {profile} = useAuth();

  return (
    <>
      <p>Welcom, {profile.email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
};
