import ProtectedRoute, { ProtectedRouteProps } from "./routes/privateRoutes";
import React, { useEffect } from "react";

import Routes from "./routes/routes";
import { SessionContextProvider } from "./contexts/sessionContext";

const App = () => {
  return (
    <SessionContextProvider>
      <Routes />
    </SessionContextProvider>
  );
};

export default App;
