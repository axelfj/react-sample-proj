import ProtectedRoute, { ProtectedRouteProps } from "./privateRoutes";
import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Bootstrap from "react-bootstrap";
import Dashboard from "../components/dashboard";
import Details from "../components/details";
import Home from "../components/home";
import Login from "../components/login";
import Navbar from "../components/shared/navbar";
import Profile from "../components/profile";
import Register from "../components/register";
import { SessionContext } from "../contexts/sessionContext";

const Routes = () => {
  const [sessionContext] = useContext(SessionContext);

  const authRoutes: ProtectedRouteProps = {
    isAuthenticated: !sessionContext.isAuthenticated,
    authenticationPath: sessionContext.redirectPath,
  };

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: sessionContext.isAuthenticated,
    authenticationPath: sessionContext.redirectPath,
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/dashboard"
          component={Dashboard}
        />

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/profile/details"
          component={Details}
        />
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          path="/profile"
          component={Profile}
        />

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}

        <Route {...authRoutes} path="/login" component={Login} />
        <Route {...authRoutes} path="/register" component={Register} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
