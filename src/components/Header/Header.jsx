
import { AppBar, Box, Toolbar } from '@mui/material';
import  AuthNav  from '../../components/AuthNav/AuthNav';
import { Navigation } from '../../components/Navigation/Navigation';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../hooks';




export const Header = () => {
  const {isLoggedIn} = useAuth();



  return (
    
    <Box sx={{flexGrow: 1}}>
      <AppBar>
        <Toolbar>
          
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Toolbar>
      </AppBar>
    </Box>
      
    
  );
};
