import React, { useState } from "react";

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
import { copyFileSync } from "node:fs";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://soundcloud.com/dazencr">
        DAZEN
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      password: "",
    },
    onSubmit: (values) => {
      const fromStorage = localStorage.getItem("users");
      let newUsers = {};
      console.log();
      if (fromStorage?.includes(values.username)) {
        alert("The username is already taken.");
      } else {
        if (fromStorage) {
          newUsers = {
            ...JSON.parse(fromStorage),
            [values.username]: values,
          };
        } else {
          newUsers = {
            [values.username]: values,
          };
        }
        localStorage.setItem("users", JSON.stringify(newUsers));
        alert("User registered!");
      }
    },
  });
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5">
            Register into reactive!
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
              id="firstname"
              label="Firstname"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Lastname"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.lastname}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default Register;
