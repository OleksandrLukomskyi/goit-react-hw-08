import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;
    dispatch(register({
      name: name.value,
      email: email.value,
      password: password.value,
    }));
  };
  return (
    <Container component="form" maxWidth="xs" onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center', minHeight: '100vh'}}>
      
      <Box sx={{border: '1px solid #ccc', padding: '20px', borderRadius: '8px'}}>
        
        <Typography variant="h4">Sign Up</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Username"
              type="text"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Registration
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login" variant="body2">
              {"Have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
