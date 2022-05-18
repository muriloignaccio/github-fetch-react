import { useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

import './App.css';
import Container from './components/Container';

function App() {
  return (
    <>
      <Header />
    
      <Container>
        <main className="content">
          <SearchBar />
          <UserList />
        </main>
      </Container>


    </>
  );
}

export default App;
