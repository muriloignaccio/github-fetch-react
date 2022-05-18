import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GithubUsersProvider from './contexts/GithubUsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubUsersProvider>
      <App />
    </GithubUsersProvider>
  </React.StrictMode>
);