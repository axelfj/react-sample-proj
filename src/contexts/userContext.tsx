import { User, initialUser } from "../models/user";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext<[User, (User: User) => void]>([
  initialUser,
  (user: User) => {},
]);
export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = (props) => {
  const [userContext, setUserContext] = useState(initialUser);
  const defaultUserContext: [User, typeof setUserContext] = [
    userContext,
    setUserContext,
  ];

  return (
    <UserContext.Provider value={defaultUserContext}>
      {props.children}
    </UserContext.Provider>
  );
};
