import { Redirect, Route, RouteProps } from "react-router-dom";
import React, {FC} from "react";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  component: React.ComponentType;
  path: string;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  component,
  path
}) => {
  return isAuthenticated ? 
  <Route {...{component, path}} /> : 
  <Redirect to={{ pathname: authenticationPath }} />
};

export default ProtectedRoute;
