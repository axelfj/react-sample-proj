import { Redirect, Route, RouteProps } from "react-router";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

const ProtectedRoute = ({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return <Route {...routeProps} children={routeProps.component} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};

export default ProtectedRoute;
