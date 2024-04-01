import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { logIn } from "../../store/auth/operations";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    dispatch(logIn({ email: email.value, password: password.value }))
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    e.target.reset();
  };

  return (
    <Container component="form" maxWidth="xs" onSubmit={handleSubmit}>
      <Paper>
        <Grid container justifyContent="flex-end">
          <Link to="/">Home</Link>
        </Grid>
        <Typography variant="h4">Log in</Typography>

        <Grid container spacing={2}>
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
          Log In
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
