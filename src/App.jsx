import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="content">
          <SearchBar />
        </main>
      </div>
    </>
  );
}

export default App;
