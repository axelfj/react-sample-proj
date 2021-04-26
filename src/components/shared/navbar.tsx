import React, { useContext } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { SessionContext } from "../../contexts/sessionContext";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const [sessionContext, setSessionContext] = useContext(SessionContext);

  const classes = useStyles();
  const history = useHistory();

  const setRoute = (route: string) => {
    history.push(route);
  };

  const items = [
    { route: "/", navItem: "Home", display: !sessionContext.isAuthenticated },
    {
      route: "/Login",
      navItem: "Login",
      display: !sessionContext.isAuthenticated,
    },
    {
      route: "/Register",
      navItem: "Register",
      display: !sessionContext.isAuthenticated,
    },
    {
      route: "/Dashboard",
      navItem: "Dashboard",
      display: sessionContext.isAuthenticated,
    },
    {
      route: "/Profile",
      navItem: "Profile",
      display: sessionContext.isAuthenticated,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Reactivation
          </Typography>
          {items
            .filter(({ display }) => display)
            .map(({ route, navItem }) => (
              <Button color="inherit" onClick={() => setRoute(route)}>
                {navItem}
              </Button>
            ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
