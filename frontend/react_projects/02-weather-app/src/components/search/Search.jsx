import PropTypes from "prop-types";

function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        name="search"
        placeholder="Enter City name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
