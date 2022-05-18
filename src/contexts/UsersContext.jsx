import { createContext, useState } from "react";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  function addAUser(user) {
    const newUsers = [...users, user];

    setUsers(newUsers);
  }

  return (
    <UsersContext.Provider value={{ users, addAUser }}>
      {children}
    </UsersContext.Provider>
  );

}