import React, { useContext } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import {
  SessionContext,
  SessionContextProvider,
} from "../contexts/sessionContext";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://material-ui.com/">
      DAZEN
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.dark,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: theme.palette.secondary.dark,
    },
  }));

  const [, setSessionContext] = useContext(SessionContext);
  const history = useHistory();

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      try {
        const fromStorage = localStorage.getItem("users");

        if (fromStorage && fromStorage.indexOf(values.username)) {
          const parsedStorage = JSON.parse(fromStorage);
          const user = parsedStorage[values.username];
          if (
            user.username === values.username &&
            user.password === values.password
          ) {
            alert("Logged!");
            setSessionContext({
              isAuthenticated: true,
              redirectPath: "/Dashboard",
            });
            history.push("/Dashboard");
            localStorage.setItem("user", JSON.parse(values.username));
          } else if (user.password !== values.password) {
            alert("Wrong password.");
          }
        } else {
          alert("That user doesn't exist.");
        }
      } catch (err) {
        throw err;
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Log into reactive!
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/Register" variant="body2">
                {"Don't have an account? Sign Up"}{" "}
                {/* TODO replace with sharedComponent */}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
