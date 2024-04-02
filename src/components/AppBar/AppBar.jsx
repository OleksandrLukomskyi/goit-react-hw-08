
import { AppBar as MuiAppBar, Box, Toolbar } from '@mui/material';
import  AuthNav  from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks';




export const AppBar = () => {
  const {isLoggedIn} = useAuth();



  return (
    
    <Box sx={{flexGrow: 1}}>
      <MuiAppBar>
        <Toolbar>
          
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Toolbar>
      </MuiAppBar>
    </Box>
      
    
  );
};
