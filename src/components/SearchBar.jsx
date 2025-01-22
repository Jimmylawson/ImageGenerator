import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
  };
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="Enter search..."
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
