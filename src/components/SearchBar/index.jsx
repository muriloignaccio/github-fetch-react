import "./style.css";

function SearchBar() {
  return (
    <form className="search_bar">
        <h2 className="search_title">Busque por usuários do Github</h2>
        <div className="search_box">
          <input type="text" placeholder="Digite o username" />
          <button>
            <i className="fas fa-search"></i>
            Buscar
          </button>
        </div>
    </form>
  );
}

export default SearchBar;