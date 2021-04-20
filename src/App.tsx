import ProtectedRoute, { ProtectedRouteProps } from "./routes/privateRoutes";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard";
import Details from "./components/details";
import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/shared/navbar";
import Profile from "./components/profile";
import React from "react";
import Register from "./components/register";
import { profile } from "node:console";
import { useSessionContext } from "./contexts/sessionContext";

export default function App() {
  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path: string) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };

  const defaultProtectedRouteProps: ProtectedRouteProps = {
    isAuthenticated: !!sessionContext.isAuthenticated,
    authenticationPath: "/login",
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
          <ProtectedRoute {...defaultProtectedRouteProps} path="/dashboard">
            <Dashboard />
          </ProtectedRoute>

          {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            path="/profile/details"
          >
            <Details />
          </ProtectedRoute>
          <ProtectedRoute {...defaultProtectedRouteProps} path="/profile">
            <Profile />
          </ProtectedRoute>

          {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
