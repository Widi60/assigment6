import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary mx-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
