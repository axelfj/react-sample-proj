import { Session, initialSession } from "../models/session";
import { createContext, useState } from "react";

export const SessionContext = createContext<
  [Session, (session: Session) => void]
>([initialSession, (session: Session) => {}]);

export const SessionContextProvider: React.FC = (props) => {
  const [sessionState, setSessionState] = useState(initialSession);

  const defaultSessionContext: [Session, typeof setSessionState] = [
    sessionState,
    setSessionState,
  ];

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      {props.children}
    </SessionContext.Provider>
  );
};
