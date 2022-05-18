import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <Header />
      <div className="container">
        <main className="content">
          <SearchBar users={users} setUsers={setUsers} />
          <UserList users={users} />
        </main>
      </div>
    </>
  );
}

export default App;
