import { Button, Grid} from "@mui/material";
import { NavLink } from "react-router-dom"


 const AuthNav = () => {
  return (
    <Grid container justifyContent='flex-end'>
      <NavLink to="/register">
        <Button variant="text" style={{color: 'white'}}> Register</Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="text" style={{color: 'white'}}> Log In</Button>
      </NavLink>

    </Grid>
  )
}

export default AuthNav;