import Routes from "./routes/routes";
import { SessionContextProvider } from "./contexts/sessionContext";

const App = () => {
  return (
    <>
      <SessionContextProvider>
        <Routes />
      </SessionContextProvider>
    </>
  );
};

export default App;
