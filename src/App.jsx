import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { GithubUsersContext } from './contexts/GithubUsersContext';

function App() {
  const { users, addUser } = useContext(GithubUsersContext);
  return (
    <>
        <Header />
        <div className="container">
          <main className="content">
            <SearchBar users={users} addUser={addUser} />
            <UserList users={users} />
          </main>
        </div>
    </>
  );
}

export default App;
