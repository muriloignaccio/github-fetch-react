import { useState, createContext } from 'react';

export const GithubUsersContext = createContext();

const GithubUsersProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storagedUsers = localStorage.getItem("github_users");

    return JSON.parse(storagedUsers) || [];
  });

  function addUser(user) {
    const updatedUsers = [...users, user];

    setUsers(updatedUsers);

    return localStorage.setItem('github_users', JSON.stringify(updatedUsers));
  }

  function removeUser(username) {
    const doesUserExist = users.find(user => user.login === username);

    if (!doesUserExist) throw new Error();

    const updatedUsers = users.filter(user => user.login !== username);

    setUsers(updatedUsers);

    return localStorage.setItem('github_users', JSON.stringify(updatedUsers));
  }

  return (
    <GithubUsersContext.Provider  
      value={{ users, addUser, removeUser }}
    >
      { children }
    </GithubUsersContext.Provider>
  );
};

export default GithubUsersProvider;