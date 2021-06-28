import React, { useContext } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { SessionContext } from "../../contexts/sessionContext";
import { ThemeContext } from "react-navigation";
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
    navBar: {
      backgroundColor: theme.palette.secondary.dark,
    },
  })
);

export type NavItem = {
  route: string;
  navItem: string;
  display: boolean;
};

export interface INavbar {
  items?: NavItem[];
}

const Navbar = ({ items = [] }: INavbar) => {
  const [sessionContext] = useContext(SessionContext);

  const classes = useStyles();
  const history = useHistory();

  const setRoute = (route: string) => {
    history.push(route);
  };

  const defaultItems = [
    { route: "/", navItem: "Home", display: true },
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
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="default"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Reactivation
          </Typography>
          {items.length > 0
            ? items
                .filter(({ display }) => display)
                .map(({ route, navItem }) => (
                  <Button
                    key={route}
                    color="inherit"
                    onClick={() => setRoute(route)}
                  >
                    {navItem}
                  </Button>
                ))
            : defaultItems
                .filter(({ display }) => display)
                .map(({ route, navItem }) => (
                  <Button
                    key={route}
                    color="inherit"
                    onClick={() => setRoute(route)}
                  >
                    {navItem}
                  </Button>
                ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
