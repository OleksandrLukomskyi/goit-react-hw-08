import { useDispatch} from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  
  const dispatch = useDispatch();
  const {user} = useAuth();

  return (
    <>
      <Typography component='p' sx={{ flexGrow: 1}}>Welcom, {user.email}</Typography>
      <Button variant='text' color='inherit' onClick={() => dispatch(logOut())} sx={{ flexGrow: 1}} >
        Logout
      </Button>
    </>
  );
};
